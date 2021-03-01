import { render, screen } from '@testing-library/react'
import React from 'react'
import { NotFoundPage } from './not-found-page'

describe('NotFoundPage', () => {
	it('renders correctly', () => {
		render(<NotFoundPage />)
		const title = screen.getByText(/Oops! Something went wrong./i)
		const subtitle = screen.getByText(
			/The page you were looking for doesn't exist./i
		)
		expect(title).toBeInTheDocument()
		expect(subtitle).toBeInTheDocument()
	})
})
