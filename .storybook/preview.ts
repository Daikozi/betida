import { Preview } from '@storybook/nextjs-vite'

import { ThemeProviderDecorator } from './decorators'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'error',
    },
  },
  decorators: [ThemeProviderDecorator],
}

export default preview
