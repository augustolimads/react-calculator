import { Story, Meta } from '@storybook/react/types-6-0'
import Container, { ContainerProps } from '.'

export default {
  title: 'Container',
  component: Container,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ContainerProps> = (args) => <Container {...args} />

Default.args = {
  children: 'Content'
}
