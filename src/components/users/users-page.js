import React from 'react'
import { useAxios } from '../../services/client'

const UsersPage = () => {
	const page = 1
	const results = 50
	const nat = 'ch,es,fr,gb'

	const [{ data, loading, error, refetch }] = useAxios(
		`?page=${page}&results=${results}&nat=${nat}`
	)

	console.log(data)

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
				{data && Array.isArray(data?.results) && data?.results.length >= 1 ? (
					data.results.map((user) => (
						<div>
							<p>
								{user.name.title} {user.name.first} {user.name.last}
							</p>
						</div>
					))
				) : (
					<p>There are no users matching your query</p>
				)}
			</div>
		</div>
	)
}

export { UsersPage }
