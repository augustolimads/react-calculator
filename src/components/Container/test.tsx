import { render, screen } from '@testing-library/react'

import Container from '.'

const props = {
  children: 'testando container'
}

describe('<Container />', () => {
  it('should render the children content', () => {
    const { container } = render(<Container {...props} />)
    expect(screen.getByText('testando container')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
