import { Meta, StoryObj } from '@storybook/nextjs-vite'

import TrendingCard from './TrendingCard'

const meta = {
  title: 'Components/TrendingCard',
  component: TrendingCard,
  args: {
    image: '/assets/images/trending_games_1.webp',
    link: 'https://example.com',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrendingCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithRankAndQuantityPlaying: Story = {
  args: {
    rank: 1,
    quantityPlaying: 365,
  },
}

export const WithRankOnly: Story = {
  args: {
    rank: 1,
  },
}

export const WithQuantityPlayingOnly: Story = {
  args: {
    quantityPlaying: 365,
  },
}

export const WithSmallImage: Story = {
  args: {
    image: '/assets/images/publishers_1.webp',
    quantityPlaying: 365,
  },
}
