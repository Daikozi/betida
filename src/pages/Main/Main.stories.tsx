import { Meta, StoryObj } from '@storybook/nextjs-vite'

import Main from './Main'

const meta = {
  title: 'Pages/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
