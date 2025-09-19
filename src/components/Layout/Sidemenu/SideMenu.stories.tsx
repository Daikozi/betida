import { Meta, StoryObj } from '@storybook/nextjs-vite'

import SideMenu from './SideMenu'

const meta = {
  title: 'Layout/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SideMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Open: Story = {
  args: {
    forceOpen: true,
  },
}
