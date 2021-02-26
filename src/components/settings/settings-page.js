import React, { useContext } from 'react'
import { Context as SettingsContext } from '../../context/settings'

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

	return (
		<div>
			<h1>Settings</h1>
			<select
				value={nationality}
				onChange={(e) => setNationality(e.target.value)}
			>
				{nationalityOptions.map((nat) => (
					<option value={nat.value}>{nat.name}</option>
				))}
			</select>
		</div>
	)
}

export { SettingsPage }
