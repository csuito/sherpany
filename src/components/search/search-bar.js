import React, { useContext, useState } from 'react'
import { Context as UsersContext } from '../../context/users'
import './search-bar.css'

const SearchBar = () => {
	const { search } = useContext(UsersContext)
	const [searchTerm, setSearchTerm] = useState('')

	const handleChange = ({ target: { value } }) => {
		setSearchTerm(value)
		search(value)
	}

	return (
		<div className='search-bar'>
			<input
				id='search'
				type='text'
				name='search'
				value={searchTerm}
				onChange={handleChange}
				placeholder='Search a user by name'
			/>
		</div>
	)
}

export { SearchBar }
