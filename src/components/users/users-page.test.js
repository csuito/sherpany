import { render } from '@testing-library/react'
import React from 'react'
import { Provider as SettingsProvider } from '../../context/settings'
import { Provider as UsersProvider } from '../../context/users'
import { UsersPage } from './users-page'

describe('UsersPage', () => {
	it('renders correctly', () => {
		render(
			<UsersProvider>
				<SettingsProvider>
					<UsersPage />
				</SettingsProvider>
			</UsersProvider>
		)
		const container = document.querySelector('div')
		expect(container).not.toBeNull()
	})
})
