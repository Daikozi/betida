import { main } from '@/data/main'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Table from './Table'

const meta = {
  title: 'Components/Table',
  component: Table,
  args: {
    tableView: 'casino_bets',
    tables: main.default.tables,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
