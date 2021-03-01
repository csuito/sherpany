import { render } from '@testing-library/react'
import React from 'react'
import { Provider as UsersProvider } from '../../context/users'
import { UserCard } from './user-card'

const testUser = {
	email: 'kelly.snyder@example.com',
	name: {
		first: 'Kelly',
		last: 'Snyder',
	},
	login: {
		username: '@crazybear221',
	},
	picture: {
		thumbnail: 'https://randomuser.me/api/portraits/women/89.jpg',
	},
}

describe('UserCard', () => {
	it('renders correctly', () => {
		render(
			<UsersProvider>
				<UserCard user={testUser} />
			</UsersProvider>
		)

		const [fullName] = document.getElementsByClassName('name')
		const [image] = document.getElementsByClassName('thumbnail')
		const [username] = document.getElementsByClassName('username')
		expect(fullName.textContent).toEqual(
			`${testUser.name.first} ${testUser.name.last}`
		)
		expect(image.getAttribute('src')).toEqual(testUser.picture.thumbnail)
		expect(username.textContent).toEqual(`@${testUser.login.username}`)
	})
})
