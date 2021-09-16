import { Story, Meta } from '@storybook/react/types-6-0'
import Container from 'components/Container'
import CardCalculator from '.'

export default {
  title: 'CardCalculator',
  component: CardCalculator
} as Meta

export const Default: Story = () => (
  <Container>
    <CardCalculator />
  </Container>
)
