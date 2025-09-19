import { sideMenu } from '@/data/sideMenu'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

import MenuItem from './MenuItem'

const meta = {
  title: 'Components/MenuItem',
  component: MenuItem,
  args: {
    text: 'Affiliate',
    icon: sideMenu.list[1][1].icon,
    showWhenOpen: true,
    isSideMenuOpen: true,
    onClick: () => {
      /* empty */
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    isSelected: true,
  },
}

export const WithSubMenu: Story = {
  args: {
    text: 'Sponsorships',
    icon: sideMenu.list[2][0].icon,
    subitems: sideMenu.list[2][0].subMenu,
  },
}
