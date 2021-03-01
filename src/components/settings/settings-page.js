import React, { useContext } from 'react'
import Select from 'react-select'
import { Context as SettingsContext } from '../../context/settings'
import { Context as UsersContext } from '../../context/users'
import './settings-page.css'

const options = [
	{ label: 'All', value: 'ch,es,fr,gb' },
	{ label: 'Swiss', value: 'ch' },
	{ label: 'Spanish', value: 'es' },
	{ label: 'French', value: 'fr' },
	{ label: 'British', value: 'gb' },
]

const SettingsPage = () => {
	const {
		state: { nationality },
		setNationality,
	} = useContext(SettingsContext)
	const { setUsers, setPage } = useContext(UsersContext)

	const handleSelect = ({ label, value }) => {
		setNationality({ label, value })
		setUsers([])
		setPage(1)
	}

	return (
		<div className='settings-container'>
			<h1>Settings</h1>
			<p>Select users nationality</p>
			<Select value={nationality} onChange={handleSelect} options={options} />
		</div>
	)
}

export { SettingsPage }
