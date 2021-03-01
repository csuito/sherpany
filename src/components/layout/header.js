import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { SearchBar } from '../search/search-bar'
import './header.css'

const Header = () => {
	return (
		<header>
			<Link to='/'>
				<FaAddressBook color='fefefe' size={28} />
			</Link>
			<SearchBar />
			<Link to='/settings'>
				<IoSettingsOutline color='fefefe' size={28} />
			</Link>
		</header>
	)
}

export { Header }
