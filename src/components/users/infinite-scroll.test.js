import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider as UsersProvider } from '../../context/users'
import { InfiniteScroller } from './infinite-scroll'

describe('InfiniteScroller', () => {
	const fetchNextPage = () => {}

	it('renders correctly', () => {
		const data = []
		render(
			<UsersProvider>
				<InfiniteScroller
					data={data}
					fetchNextPage={fetchNextPage}
					loading={false}
				/>
			</UsersProvider>
		)
		const [list] = document.getElementsByClassName('list-container')
		expect(list).not.toBeNull()
	})

	it('shows end of list message', () => {
		const data = new Array(1000)
		render(
			<UsersProvider>
				<InfiniteScroller
					data={data}
					fetchNextPage={fetchNextPage}
					loading={false}
				/>
			</UsersProvider>
		)
		const text = screen.getByText(/End of users catalog/i)
		expect(text).not.toBeNull()
	})
})
