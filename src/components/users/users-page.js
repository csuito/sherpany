import React, { useContext } from 'react'
import { Context as UsersContext } from '../../context/users'
import { useUsers } from '../../hooks/use-users'

const UsersPage = () => {
	const [{ loading, error, refetch, fetchNextPage }] = useUsers()
	const {
		state: { renderUsers: users },
	} = useContext(UsersContext)

	return (
		<div>
			{loading && (
				<div>
					<p>Loading...</p>
				</div>
			)}

			{error && (
				<div>
					<p>There was an error loading users data</p>
					<button onClick={refetch}>Try again</button>
				</div>
			)}

			<div>
				{Array.isArray(users) && users.length >= 1 ? (
					users.map((user, i) => (
						<div key={`${i}-${user.name.first}-${user.name.last}`}>
							<p>
								{user.name.title} {user.name.first} {user.name.last}
							</p>
						</div>
					))
				) : (
					<p>There are no users matching your query</p>
				)}
				<button onClick={fetchNextPage}>Fetch Next</button>
			</div>
		</div>
	)
}

export { UsersPage }
