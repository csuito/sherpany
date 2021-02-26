import { useContext, useEffect, useState } from 'react'
import { Context as SettingsContext } from '../context/settings'
import { useAxios } from '../services/client'

const useUsers = () => {
	const {
		state: { nationality },
	} = useContext(SettingsContext)
	const [users, setUsers] = useState([])
	const [page, setPage] = useState(1)

	const [{ data, loading, error }, refetch] = useAxios({
		params: { page, nat: nationality, results: 50 },
	})

	const fetchNextPage = () => {
		setPage((page) => page + 1)
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
	}, [nationality])

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
