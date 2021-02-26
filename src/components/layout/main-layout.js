import PropTypes from 'prop-types'
import React from 'react'
import { SearchBar } from '../search/search-bar'

const MainLayout = ({ children }) => {
	return (
		<div>
			<header>
				<SearchBar />
			</header>
			{children}
		</div>
	)
}

MainLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export { MainLayout }
