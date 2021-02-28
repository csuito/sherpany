import React, { useContext } from 'react'
import { Context as SettingsContext } from '../../context/settings'
import { Context as UsersContext } from '../../context/users'

const nationalityOptions = [
	{ name: 'All', value: 'ch,es,fr,gb' },
	{ name: 'Swiss', value: 'ch' },
	{ name: 'Spanish', value: 'es' },
	{ name: 'French', value: 'fr' },
	{ name: 'British', value: 'gb' },
]

const SettingsPage = () => {
	const {
		state: { nationality },
		setNationality,
	} = useContext(SettingsContext)
	const { setUsers } = useContext(UsersContext)

	const handleSelect = (e) => {
		setNationality(e.target.value)
		setUsers([])
	}

	return (
		<div>
			<h1>Settings</h1>
			<select value={nationality} onChange={handleSelect}>
				{nationalityOptions.map((nat, i) => (
					<option key={nat.value} value={nat.value}>
						{nat.name}
					</option>
				))}
			</select>
		</div>
	)
}

export { SettingsPage }
