import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
// Pages
import { MainLayout } from './components/layout/main-layout'
import { NotFoundPage } from './components/not-found/not-found-page'
import { SettingsPage } from './components/settings/settings-page'
import { UsersPage } from './components/users/users-page'
// Providers
import { Provider as SettingsProvider } from './context/settings'
import { Provider as UsersProvider } from './context/users'

function App() {
	return (
		<SettingsProvider>
			<UsersProvider>
				<Router>
					<Switch>
						<MainLayout>
							<Route exact path='/settings' component={SettingsPage} />
							<Route exact path='/' component={UsersPage} />
						</MainLayout>
						<Route path='*' component={NotFoundPage} />
					</Switch>
				</Router>
			</UsersProvider>
		</SettingsProvider>
	)
}

export default App
