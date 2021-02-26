import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
// Pages
import { MainLayout } from './components/layout/main-layout'
import { NotFoundPage } from './components/not-found/not-found-page'
import { SettingsPage } from './components/settings/settings-page'
import { UsersPage } from './components/users/users-page'
import { Provider as SettingsProvider } from './context/settings'

function App() {
	return (
		<SettingsProvider>
			<Router>
				<Switch>
					<Route exact path='/settings' component={SettingsPage} />
					<MainLayout>
						<Route exact path='/' component={UsersPage} />
					</MainLayout>
					<Route path='*' component={NotFoundPage} />
				</Switch>
			</Router>
		</SettingsProvider>
	)
}

export default App
