import { useEffect, useState } from 'react'
import { useAxios } from '../services/client'

const useUsers = () => {
	const [users, setUsers] = useState([])
	const [page, setPage] = useState(1)

	const nat = 'ch,es,fr,gb'

	const [{ data, loading, error }, refetch] = useAxios(
		`?page=${page}&results=50&nat=${nat}`
	)

	const fetchNextPage = async () => {
		console.log('Fetching next!')
		setPage((page) => page + 1)
		try {
			await refetch()
		} catch (err) {
			return err
		}
	}

	const cleanUp = () => {
		setPage(() => 1)
		setUsers([])
	}

	useEffect(() => {
		if (data && Array.isArray(data?.results) && data?.results.length >= 1) {
			setUsers((users) => [...users, ...data.results])
		}
	}, [data])

	useEffect(() => {
		cleanUp()
	}, [nat])

	return [
		{
			users,
			loading,
			error,
			refetch,
			fetchNextPage,
		},
	]
}

export { useUsers }
