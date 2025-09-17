import { Meta, StoryObj } from '@storybook/nextjs-vite'

import BottomBar from './BottomBar'

const meta = {
  title: 'Components/BottomBar',
  component: BottomBar,
  parameters: {
    // layout: 'centered',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} satisfies Meta<typeof BottomBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
