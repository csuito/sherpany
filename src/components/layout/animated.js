import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const ShowAnimated = ({ children, delay }) => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setVisible(true)
		}, delay)
		return () => clearTimeout(timeoutID)
	}, [delay])

	return <div className={visible ? 'visible' : 'invisible'}>{children}</div>
}

ShowAnimated.defaultProps = {
	delay: 300,
}

ShowAnimated.propTypes = {
	delay: PropTypes.number.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export { ShowAnimated }
