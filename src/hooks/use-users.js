import { useContext, useEffect, useState } from 'react'
import { Context as UsersContext } from '../context/users'
import { useAxios } from '../services/client'
import { checkArray } from '../util'

const useUsers = () => {
	const {
		state: {
			users,
			searching,
			showModal,
			page,
			nationality: { value: nat },
		},
		setUsers,
		setPage,
	} = useContext(UsersContext)

	const skipRequest = users.length >= 50
	const [fetchError, setFetchError] = useState(null)
	const [{ data, loading, error }, refetch] = useAxios(
		{
			params: { page, nat, results: 50 },
		},
		{ manual: skipRequest }
	)

	const fetchNextPage = async () => {
		if (searching || showModal || loading) return
		try {
			await refetch()
		} catch (err) {
			setFetchError(err)
		}
	}

	useEffect(() => {
		if (checkArray(data?.results) && !searching && !showModal) {
			setUsers([...users, ...data.results])
			setPage(page + 1)
		}
	}, [data, searching, showModal]) /* eslint-disable-line */

	return [
		{
			loading,
			error: error || fetchError,
		},
		refetch,
		fetchNextPage,
	]
}

export { useUsers }
