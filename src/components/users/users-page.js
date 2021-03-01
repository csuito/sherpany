import React, { useContext } from 'react'
import ReactLoading from 'react-loading'
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
				searching && (
					<div className='list-end-container'>
						<p className='list-end-text no-matches'>
							There are no users matching your search
						</p>
					</div>
				)
			)}

			{loading && (
				<div className='loader-container'>
					<ReactLoading
						type='cubes'
						color='#0099fe'
						height='100px'
						width='100px'
					/>
				</div>
			)}
		</div>
	)
}

export { UsersPage }
