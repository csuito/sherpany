import PropTypes from 'prop-types'
import React from 'react'
import { Header } from './header'

const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />
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
