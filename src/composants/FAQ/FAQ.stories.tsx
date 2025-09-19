import { main } from '@/data/main'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

import FAQ from './FAQ'

const meta = {
  title: 'Components/FAQ',
  component: FAQ,
  args: {
    accordionItems: main.default.faq.items,
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FAQ>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
