import { sideMenu } from '@/data/sideMenu'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

import MenuList from './MenuList'

const meta = {
  title: 'Components/MenuList',
  component: MenuList,
  args: {
    isSideMenuOpen: true,
    menuItems: sideMenu.list[2],
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MenuList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
