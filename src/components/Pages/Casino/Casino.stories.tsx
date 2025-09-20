import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Casino from './Casino'

const meta = {
  title: 'Pages/Casino',
  component: Casino,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Casino>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
