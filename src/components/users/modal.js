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
import { getFullName } from '../../util'
import { ShowAnimated } from '../layout/animated'
import './modal.css'

const UserModal = () => {
	const {
		state: { showUser },
		toggleModal,
	} = useContext(UsersContext)

	const { location, email, phone, cell } = showUser

	return (
		<div className='modal'>
			<ShowAnimated delay={100}>
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
								<p className='name name-large'>{getFullName(showUser.name)}</p>
								<p className='username username-large'>
									@{showUser.login.username}
								</p>
							</div>
						</div>
						<div className='basic-data-container'>
							<IoPin size={20} color='#0099fe' />
							<p className='data-title'>Location</p>
						</div>

						<p className='text address'>{`${location.street.number}, ${location.street.name}`}</p>
						<p className='text address'>{`${location.city}, ${location.state}`}</p>
						<p className='text address'>{`${location.postcode}, ${location.country}`}</p>

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
			</ShowAnimated>
		</div>
	)
}

export { UserModal }
