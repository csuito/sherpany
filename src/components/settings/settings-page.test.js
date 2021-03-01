import { render } from '@testing-library/react'
import React from 'react'
import { Provider as SettingsProvider } from '../../context/settings'
import { Provider as UsersProvider } from '../../context/users'
import { SettingsPage } from './settings-page'

describe('SettingsPage', () => {
	it('renders correctly', () => {
		render(
			<UsersProvider>
				<SettingsProvider>
					<SettingsPage />
				</SettingsProvider>
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
				<SettingsProvider>
					<SettingsPage />
				</SettingsProvider>
			</UsersProvider>
		)
		const select = document.getElementById('select')
		expect(select).not.toBeNull()
	})
})
