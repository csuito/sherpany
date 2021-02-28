import React, { useContext } from 'react'
import { Context as UsersContext } from '../../context/users'
import { useUsers } from '../../hooks/use-users'
import { InfiniteScroller } from './infinite-scroll'
import './users-page.css'

const UsersPage = () => {
	const {
		state: { renderUsers: users },
	} = useContext(UsersContext)

	const skipRequest = users.length >= 50
	const [{ loading, error }, refetch, fetchNextPage] = useUsers(skipRequest)

	return (
		<main>
			{error && (
				<div>
					<p>There was an error loading users data</p>
					<button onClick={refetch}>Try again</button>
				</div>
			)}

			{Array.isArray(users) && users.length >= 1 ? (
				<InfiniteScroller
					data={users}
					fetchNextPage={fetchNextPage}
					loading={loading}
				/>
			) : (
				<p>There are no users matching your search</p>
			)}

			{loading && (
				<div>
					<p>Loading...</p>
				</div>
			)}
		</main>
	)
}

export { UsersPage }
