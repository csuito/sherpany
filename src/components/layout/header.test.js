import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as UsersProvider } from '../../context/users'
import { Header } from './header'

describe('Header', () => {
	beforeEach(() => {})

	it('renders correctly on home route', () => {
		render(
			<UsersProvider>
				<Router>
					<Switch>
						<Route exact path='/' component={Header} />
					</Switch>
				</Router>
			</UsersProvider>
		)
		const searchInput = document.getElementById('search')
		expect(searchInput).not.toBeNull()
	})

	it('hides search-bar on /settings route', () => {
		render(
			<UsersProvider>
				<Router>
					<Switch>
						<Route exact path='/settings' component={Header} />
					</Switch>
				</Router>
			</UsersProvider>
		)
		const searchInput = document.getElementById('search')
		expect(searchInput).toBeNull()
	})
})
