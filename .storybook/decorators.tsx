import { Decorator } from '@storybook/react'

import ThemeProvider from '@/providers/ThemeProvider'

export const ThemeProviderDecorator: Decorator = (StoryFn) => (
  <ThemeProvider>
    <StoryFn />
  </ThemeProvider>
)
