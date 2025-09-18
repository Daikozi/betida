import { Meta, StoryObj } from '@storybook/nextjs-vite'

import UserInfoCard from './UserInfoCard'

const meta = {
  title: 'Components/UserInfoCard',
  component: UserInfoCard,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof UserInfoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
