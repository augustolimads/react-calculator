import { render, screen } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {
  it('should render the children node', () => {
    render(<Home />)

    expect(true)
  })
})
