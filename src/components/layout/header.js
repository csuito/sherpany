import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { SearchBar } from '../search/search-bar'
import './header.css'

const Header = (props) => {
	const location = useLocation()
	const showSearchBar = location.pathname === '/'

	return (
		<header>
			<Link to='/'>
				<FaAddressBook color='fefefe' size={28} />
			</Link>
			{showSearchBar && <SearchBar />}
			<Link to='/settings'>
				<IoSettingsOutline color='fefefe' size={28} />
			</Link>
		</header>
	)
}

export { Header }
