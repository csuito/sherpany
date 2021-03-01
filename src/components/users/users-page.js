import React, { useContext } from 'react'
import { Context as UsersContext } from '../../context/users'
import { useUsers } from '../../hooks/use-users'
import { checkArray } from '../../util'
import { InfiniteScroller } from './infinite-scroll'
import { UserModal } from './modal'
import './users-page.css'

const UsersPage = () => {
	const {
		state: { renderUsers: users, searching, showModal },
	} = useContext(UsersContext)
	const [{ loading, error }, refetch, fetchNextPage] = useUsers()

	return (
		<div>
			{error && (
				<div>
					<p>There was an error loading users data</p>
					<button onClick={refetch}>Try again</button>
				</div>
			)}

			{showModal && <UserModal />}

			{checkArray(users) ? (
				<InfiniteScroller
					data={users}
					fetchNextPage={fetchNextPage}
					loading={loading}
				/>
			) : (
				searching && <p>There are no users matching your search</p>
			)}

			{loading && (
				<div>
					<p>Loading...</p>
				</div>
			)}
		</div>
	)
}

export { UsersPage }
