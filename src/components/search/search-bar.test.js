import { render } from '@testing-library/react'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider as UsersProvider } from '../../context/users'
import { SearchBar } from './search-bar'

describe('SearchBar', () => {
	const input = () => document.getElementById('search')

	it('renders correctly', () => {
		render(
			<UsersProvider>
				<SearchBar />
			</UsersProvider>
		)
		expect(input()).not.toBeNull()
		expect(input().tagName).toEqual('INPUT')
		expect(input().type).toEqual('text')
	})

	it('renders with defaultValue prop', () => {
		const value = 'John'
		render(
			<UsersProvider>
				<SearchBar defaultValue={value} />
			</UsersProvider>
		)
		expect(input().value).toEqual(value)
	})

	it('handles onChange event', async () => {
		render(
			<UsersProvider>
				<SearchBar />
			</UsersProvider>
		)
		await ReactTestUtils.Simulate.change(input(), {
			target: { value: 'Emma' },
		})
		expect(input().value).toEqual('Emma')
	})
})
