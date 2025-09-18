import Paper from '@mui/material/Paper'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Design System/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Paper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Exemple',
  },
}
