import { render } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import {
	Context as UsersContext,
	Provider as UsersProvider,
} from '../../context/users'
import { UserModal } from './modal'

const testUser = {
	cell: '0785-189-678',
	email: 'kelly.snyder@example.com',
	location: {
		city: 'Norwich',
		country: 'United Kingdom',
		postcode: 'R2Y 2FT',
		state: 'West Glamorgan',
		street: {
			number: 57,
			name: 'Richmond Road',
		},
	},
	name: {
		first: 'Kelly',
		last: 'Snyder',
	},
	login: {
		username: '@crazybear221',
	},
	phone: '016974 88457',
	picture: {
		large: 'https://randomuser.me/api/portraits/women/89.jpg',
	},
}

const Container = ({ children }) => {
	const [ready, setReady] = useState(false)
	const { toggleModal } = useContext(UsersContext)

	useEffect(() => {
		toggleModal(testUser)
		setReady(true)
	}, []) /* eslint-disable-line */

	return <div>{ready && [children]}</div>
}

describe('UsersModal', () => {
	it('renders correctly', () => {
		render(
			<UsersProvider>
				<Container>
					<UserModal />
				</Container>
			</UsersProvider>
		)

		const [fullName] = document.getElementsByClassName('name-large')
		const [image] = document.getElementsByClassName('thumbnail-large')
		const [username] = document.getElementsByClassName('username')
		expect(fullName.textContent).toEqual(
			`${testUser.name.first} ${testUser.name.last}`
		)
		expect(image.getAttribute('src')).toEqual(testUser.picture.large)
		expect(username.textContent).toEqual(`@${testUser.login.username}`)
	})
})
