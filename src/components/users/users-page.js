import React from 'react'
import { useUsers } from '../../hooks/use-users'

const UsersPage = () => {
	const [{ users, loading, error, refetch, fetchNextPage }] = useUsers()

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
