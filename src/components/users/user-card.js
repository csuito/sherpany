import PropTypes from 'prop-types'
import React from 'react'
import './user-card.css'

const UserCard = ({ user }) => {
	return (
		<div className='card-container'>
			<p>
				{user.name.title} {user.name.first} {user.name.last}
			</p>
		</div>
	)
}

UserCard.propTypes = {
	user: PropTypes.shape({
		cell: PropTypes.string,
		dob: PropTypes.shape({
			age: PropTypes.number,
			date: PropTypes.string,
		}),
		email: PropTypes.string.isRequired,
		gender: PropTypes.string,
		id: PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string,
		}),
		location: PropTypes.shape({
			city: PropTypes.string,
			coordinates: PropTypes.shape({
				latitude: PropTypes.string,
				longitude: PropTypes.string,
			}),
			country: PropTypes.string,
			postcode: PropTypes.number,
			state: PropTypes.string,
			street: PropTypes.shape({
				number: PropTypes.number,
				name: PropTypes.string,
			}),
			timezone: PropTypes.shape({
				description: PropTypes.string,
				offset: PropTypes.string,
			}),
		}),
		name: PropTypes.shape({
			first: PropTypes.string.isRequired,
			last: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
		nat: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		picture: PropTypes.shape({
			large: PropTypes.string,
			medium: PropTypes.string,
			thumbnail: PropTypes.string.isRequired,
		}),
	}).isRequired,
}

export { UserCard }
