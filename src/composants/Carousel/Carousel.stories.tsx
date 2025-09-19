import { Meta, StoryObj } from '@storybook/nextjs-vite'

import TrendingCard from '../TrendingCard/TrendingCard'
import Carousel from './Carousel'

const meta = {
  title: 'Components/Carousel',
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
        <TrendingCard image="trending_games_1.webp" quantityPlaying={1234} rank={1} />
        <TrendingCard image="trending_games_2.webp" quantityPlaying={5678} rank={2} />
        <TrendingCard image="trending_games_3.webp" quantityPlaying={91011} rank={3} />
        <TrendingCard image="trending_games_4.webp" quantityPlaying={1213} rank={4} />
        <TrendingCard image="trending_games_5.webp" quantityPlaying={1415} rank={5} />
        <TrendingCard image="trending_games_6.webp" quantityPlaying={1617} rank={6} />
        <TrendingCard image="trending_games_7.webp" quantityPlaying={1819} rank={7} />
        <TrendingCard image="trending_games_8.webp" quantityPlaying={2021} rank={8} />
      </Carousel>
    </div>
  ),
}

export const WithSmallCards: Story = {
  render: (args) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Carousel {...args} sx={{ width: '100%', maxWidth: 600 }}>
        <TrendingCard image="publishers_1.webp" quantityPlaying={1234} />
        <TrendingCard image="publishers_2.webp" quantityPlaying={5678} />
        <TrendingCard image="publishers_3.webp" quantityPlaying={91011} />
        <TrendingCard image="publishers_4.webp" quantityPlaying={1213} />
        <TrendingCard image="publishers_5.webp" quantityPlaying={1415} />
        <TrendingCard image="publishers_6.webp" quantityPlaying={1617} />
        <TrendingCard image="publishers_7.webp" quantityPlaying={1819} />
        <TrendingCard image="publishers_8.webp" quantityPlaying={2021} />
      </Carousel>
    </div>
  ),
}
