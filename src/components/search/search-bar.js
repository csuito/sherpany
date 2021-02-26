import React, { useContext, useEffect, useState } from 'react'
import { Context as UsersContext } from '../../context/users'

const SearchBar = () => {
	const { search } = useContext(UsersContext)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		search(searchTerm)
	}, [searchTerm]) /* eslint-disable-line */

	return (
		<div>
			<input
				type='text'
				name='search'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	)
}

export { SearchBar }
