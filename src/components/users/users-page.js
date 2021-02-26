import React, { useContext } from 'react'
import { Context as UsersContext } from '../../context/users'
import { useUsers } from '../../hooks/use-users'
import { InfiniteScroller } from './infinite-scroll'

const UsersPage = () => {
	const [{ loading, error, refetch, fetchNextPage }] = useUsers()
	const {
		state: { renderUsers: users },
	} = useContext(UsersContext)

	return (
		<div>
			{error && (
				<div>
					<p>There was an error loading users data</p>
					<button onClick={refetch}>Try again</button>
				</div>
			)}

			{Array.isArray(users) && users.length >= 1 ? (
				<InfiniteScroller data={users} fetchNextPage={fetchNextPage} />
			) : (
				<p>There are no users matching your search</p>
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
