import { render } from '@testing-library/react'
import React from 'react'
import { ShowAnimated } from './animated'

describe('ShowAnimated', () => {
	beforeEach(() => {})

	it('renders correctly', () => {
		render(
			<ShowAnimated>
				<div className='text'>Text</div>
			</ShowAnimated>
		)
		const [text] = document.getElementsByClassName('text')
		expect(text).not.toBeNull()
	})
})
