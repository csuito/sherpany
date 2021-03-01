import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
// Pages
import { MainLayout } from './components/layout/main-layout'
import { NotFoundPage } from './components/not-found/not-found-page'
import { SettingsPage } from './components/settings/settings-page'
import { UsersPage } from './components/users/users-page'
import { Provider as UsersProvider } from './context/users'

function App() {
	return (
		<UsersProvider>
			<Router>
				<Switch>
					<MainLayout>
						<Switch>
							<Route exact path='/' component={UsersPage} />
							<Route exact path='/settings' component={SettingsPage} />
							<Route exact path='*' component={NotFoundPage} />
						</Switch>
					</MainLayout>
					<Route exact path='*' component={NotFoundPage} />
				</Switch>
			</Router>
		</UsersProvider>
	)
}

export default App
