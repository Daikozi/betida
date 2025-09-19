import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Sports from './Sports'

const meta = {
  title: 'Pages/Sports',
  component: Sports,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sports>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
