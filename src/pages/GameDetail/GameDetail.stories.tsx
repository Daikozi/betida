import { Meta, StoryObj } from '@storybook/nextjs-vite'

import GameDetail from './GameDetail'

const meta = {
  title: 'Pages/GameDetail',
  component: GameDetail,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GameDetail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
