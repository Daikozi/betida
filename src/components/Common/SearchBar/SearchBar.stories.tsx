import { Meta, StoryObj } from '@storybook/nextjs-vite'

import SearchBar from './SearchBar'

const meta = {
  title: 'Common/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
