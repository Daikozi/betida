import { Meta, StoryObj } from '@storybook/nextjs-vite'

import ViewModeSelector from './ViewModeSelector'

const meta = {
  title: 'Components/ViewModeSelector',
  component: ViewModeSelector,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ViewModeSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
