import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Carousel from './Carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
    title: 'Exemple',
  },
}
