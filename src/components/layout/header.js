import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../search/search-bar'

const Header = () => {
	return (
		<header>
			<SearchBar />
			<Link to='/settings'>Settings</Link>
		</header>
	)
}

export { Header }
