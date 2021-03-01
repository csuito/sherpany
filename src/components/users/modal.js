import React, { useContext } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import {
	IoClose,
	IoInformationCircle,
	IoMail,
	IoPhonePortraitOutline,
	IoPin,
} from 'react-icons/io5'
import { Context as UsersContext } from '../../context/users'
import './modal.css'

const UserModal = () => {
	const {
		state: { showUser },
		toggleModal,
	} = useContext(UsersContext)

	const { name, location, email, phone, cell } = showUser

	return (
		<div className='modal'>
			<div className='modal-data-container'>
				<div className='modal-header'>
					<IoClose
						className='close-btn'
						onClick={() => toggleModal()}
						size={28}
						color='#a0a0a0'
					/>
				</div>
				<div className='modal-body'>
					<div className='basic-data-container'>
						<img
							className='thumbnail-large'
							src={showUser.picture.large}
							alt='user-thumbnail'
						/>
						<div className='name-container'>
							<p className='name name-large'>
								{name.first} {name.last}
							</p>
							<p className='username username-large'>
								@{showUser.login.username}
							</p>
						</div>
					</div>
					<div className='basic-data-container'>
						<IoPin size={20} color='#0099fe' />
						<p className='data-title'>Location</p>
					</div>

					<p className='text'>{`${location.street.number}, ${location.street.name}`}</p>
					<p className='text'>{`${location.city}, ${location.state}`}</p>
					<p className='text'>{`${location.postcode}, ${location.country}`}</p>

					<div className='basic-data-container contact-info'>
						<IoInformationCircle color='#0099fe' size={20} />
						<p className='data-title'>Contact information</p>
					</div>

					<div className='basic-data-container'>
						<FaPhoneAlt size={18} color='a0a0a0' />
						<p className='text text-margin'>{phone}</p>
					</div>

					<div className='basic-data-container'>
						<IoPhonePortraitOutline size={18} color='a0a0a0' />
						<p className='text text-margin'>{cell}</p>
					</div>

					<div className='basic-data-container'>
						<IoMail size={18} color='a0a0a0' />
						<p className='text text-margin'>{email}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { UserModal }
