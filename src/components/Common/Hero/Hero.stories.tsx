import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Hero from './Hero'

const meta = {
  title: 'Common/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithUserInfoCard: Story = {
  args: {
    hasUserInfoCard: true,
  },
}
