import React, { useContext, useState } from 'react'
import { Context as UsersContext } from '../../context/users'

const SearchBar = () => {
	const { search } = useContext(UsersContext)
	const [searchTerm, setSearchTerm] = useState('')

	const handleChange = ({ target: { value } }) => {
		setSearchTerm(value)
		search(value)
	}

	return (
		<div>
			<input
				type='text'
				name='search'
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	)
}

export { SearchBar }
