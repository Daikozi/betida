import { Meta, StoryObj } from '@storybook/nextjs-vite'

import PromotionCard from './PromotionCard'

const meta = {
  title: 'Common/PromotionCard',
  component: PromotionCard,
  args: {
    image: '/assets/images/promotions_1.webp',
    chipLabel: 'New',
    title: 'New Games',
    subtitle: 'Explore the latest additions to our gaming library and discover your next favorite game.',
    link: '#',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PromotionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
