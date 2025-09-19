import { Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/nextjs-vite'

import BottomBar from './BottomBar'

const meta = {
  title: 'Layout/BottomBar',
  component: BottomBar,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} satisfies Meta<typeof BottomBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          BottomBar visible only on mobile
        </Typography>
      </div>
      <BottomBar />
    </>
  ),
}
