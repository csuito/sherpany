import { render } from '@testing-library/react'
import React from 'react'
import { Provider as UsersProvider } from '../../context/users'
import { SettingsPage } from './settings-page'

describe('SettingsPage', () => {
	it('renders correctly', () => {
		render(
			<UsersProvider>
				<SettingsPage />
			</UsersProvider>
		)
		const title = document.querySelector('h1')
		const text = document.querySelectorAll('p')
		expect(title).not.toBeNull()
		expect(text).not.toBeNull()
	})

	it('renders nationality selector', async () => {
		render(
			<UsersProvider>
				<SettingsPage />
			</UsersProvider>
		)
		const select = document.getElementById('select')
		expect(select).not.toBeNull()
	})
})
