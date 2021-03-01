import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { IoInformationCircle, IoMail } from 'react-icons/io5'
import { Context as UsersContext } from '../../context/users'
import './user-card.css'

const Card = ({ user }) => {
	const { toggleModal } = useContext(UsersContext)

	return (
		<div className='card-container'>
			<div className='card-header'>
				<div className='basic-data-container'>
					<img
						className='thumbnail'
						src={user.picture.thumbnail}
						alt='user-thumbnail'
					/>
					<div className='name-container'>
						<p className='name'>
							{user.name.first} {user.name.last}
						</p>
						<p className='username'>@{user.login.username}</p>
					</div>
				</div>
				<IoInformationCircle
					color='#0099fe'
					size='22'
					onClick={() => toggleModal(user)}
					className='btn'
				/>
			</div>
			<div className='basic-data-container'>
				<IoMail size='16' color='#a0a0a0' />
				<p className='email'>{user.email}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
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
			postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
			title: PropTypes.string,
		}),
		login: PropTypes.shape({
			username: PropTypes.string.isRequired,
		}),
		nat: PropTypes.string,
		phone: PropTypes.string,
		picture: PropTypes.shape({
			large: PropTypes.string,
			medium: PropTypes.string,
			thumbnail: PropTypes.string.isRequired,
		}),
	}).isRequired,
}

export const UserCard = React.memo(Card)
