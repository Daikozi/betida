import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Game from './Game'

const meta = {
  title: 'Components/Game',
  component: Game,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Game>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
