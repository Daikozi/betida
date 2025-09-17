import ThemeProvider from '@/providers/ThemeProvider'
import { Decorator } from '@storybook/react'

export const ThemeProviderDecorator: Decorator = (StoryFn) => (
  <ThemeProvider>
    <StoryFn />
  </ThemeProvider>
)
