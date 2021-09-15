import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading bydefault', () => {
    render(<Heading>heading</Heading>)
    expect(screen.getAllByText(/heading/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
