import PropTypes from 'prop-types'
import React from 'react'
import { Header } from './header'
import './main-layout.css'

const MainLayout = ({ children }) => {
	return (
		<div className='layout-container'>
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
