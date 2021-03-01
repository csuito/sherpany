import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as UsersProvider } from '../../context/users'
import { MainLayout } from './main-layout'

describe('Main Layout', () => {
	const Component = () => <div>Layout</div>

	it('renders children correctly', () => {
		render(
			<UsersProvider>
				<Router>
					<Switch>
						<MainLayout>
							<Route exact path='/' component={Component} />
						</MainLayout>
					</Switch>
				</Router>
			</UsersProvider>
		)
		const node = screen.getByText(/Layout/i)
		expect(node).toBeInTheDocument()
	})
})
