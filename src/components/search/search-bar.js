import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import { Context as UsersContext } from '../../context/users'
import './search-bar.css'

const SearchBar = ({ defaultValue }) => {
	const { search } = useContext(UsersContext)
	const [searchTerm, setSearchTerm] = useState(defaultValue)

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
				maxLength={35}
			/>
		</div>
	)
}

SearchBar.defaultProps = {
	defaultValue: '',
}

SearchBar.propTypes = {
	defaultValue: PropTypes.string,
}

export { SearchBar }
