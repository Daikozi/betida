import { Meta, StoryObj } from '@storybook/nextjs-vite'

import { main } from '@/data/main'

import FAQ from './FAQ'

const meta = {
  title: 'Common/FAQ',
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
