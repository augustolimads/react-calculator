import { Story, Meta } from '@storybook/react/types-6-0'
import Container from '.'

export default {
  title: 'Container',
  component: Container
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Container />
  </div>
)
