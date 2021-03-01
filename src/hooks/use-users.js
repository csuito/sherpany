import { useContext, useEffect, useState } from 'react'
import { Context as SettingsContext } from '../context/settings'
import { Context as UsersContext } from '../context/users'
import { useAxios } from '../services/client'
import { checkArray } from '../util'

const useUsers = (skipRequest) => {
	const {
		state: {
			nationality: { value: nat },
		},
	} = useContext(SettingsContext)

	const {
		state: { users, searching },
		setUsers,
	} = useContext(UsersContext)

	const [page, setNextPage] = useState(1)
	const [fetchError, setFetchError] = useState(null)
	const [{ data, loading, error }, refetch] = useAxios(
		{
			params: { page, nat, results: 50 },
		},
		{ manual: skipRequest }
	)

	const fetchNextPage = async () => {
		if (searching) return
		try {
			await refetch()
		} catch (err) {
			setFetchError(err)
		}
	}

	useEffect(() => {
		if (checkArray(data?.results) && !searching) {
			setUsers([...users, ...data.results])
			setNextPage((page) => page + 1)
		}
	}, [data, searching]) /* eslint-disable-line */

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
