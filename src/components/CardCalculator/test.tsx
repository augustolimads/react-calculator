import { render, screen } from '@testing-library/react'

import CardCalculator from '.'

describe('<CardCalculator />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardCalculator />)
    expect(
      screen.getByRole('heading', { name: /CardCalculator/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
