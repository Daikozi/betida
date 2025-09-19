import { Meta, StoryObj } from '@storybook/nextjs-vite'

import TrendingCard from '@/components/Common/TrendingCard/TrendingCard'

import Carousel from './Carousel'

const meta = {
  title: 'Common/Carousel',
  component: Carousel,
  args: {
    children: null,
    title: 'Exemple',
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Carousel {...args} sx={{ width: '100%', maxWidth: 600 }}>
        <TrendingCard image="trending_games_1.webp" quantityPlaying={1234} rank={1} link="https://example.com" />
        <TrendingCard image="trending_games_2.webp" quantityPlaying={5678} rank={2} link="https://example.com" />
        <TrendingCard image="trending_games_3.webp" quantityPlaying={91011} rank={3} link="https://example.com" />
        <TrendingCard image="trending_games_4.webp" quantityPlaying={1213} rank={4} link="https://example.com" />
        <TrendingCard image="trending_games_5.webp" quantityPlaying={1415} rank={5} link="https://example.com" />
        <TrendingCard image="trending_games_6.webp" quantityPlaying={1617} rank={6} link="https://example.com" />
        <TrendingCard image="trending_games_7.webp" quantityPlaying={1819} rank={7} link="https://example.com" />
        <TrendingCard image="trending_games_8.webp" quantityPlaying={2021} rank={8} link="https://example.com" />
      </Carousel>
    </div>
  ),
}

export const WithSmallCards: Story = {
  render: (args) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Carousel {...args} sx={{ width: '100%', maxWidth: 600 }}>
        <TrendingCard image="publishers_1.webp" quantityPlaying={1234} link="https://example.com" isSmall />
        <TrendingCard image="publishers_2.webp" quantityPlaying={5678} link="https://example.com" isSmall />
        <TrendingCard image="publishers_3.webp" quantityPlaying={91011} link="https://example.com" isSmall />
        <TrendingCard image="publishers_4.webp" quantityPlaying={1213} link="https://example.com" isSmall />
        <TrendingCard image="publishers_5.webp" quantityPlaying={1415} link="https://example.com" isSmall />
        <TrendingCard image="publishers_6.webp" quantityPlaying={1617} link="https://example.com" isSmall />
        <TrendingCard image="publishers_7.webp" quantityPlaying={1819} link="https://example.com" isSmall />
        <TrendingCard image="publishers_8.webp" quantityPlaying={2021} link="https://example.com" isSmall />
      </Carousel>
    </div>
  ),
}
