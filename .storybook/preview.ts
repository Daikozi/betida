import { Preview } from '@storybook/nextjs-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

import { defaultHandlers } from '@/mocks'

import { ThemeProviderDecorator } from './decorators'

initialize({
  serviceWorker: {
    url: './mockServiceWorker.js',
  },
  onUnhandledRequest: ({ url, method }) => {
    const ignoredPaths = ['/vendors', '/static', '.woff2', '.svg', '.png', '.js', '.css']

    if (ignoredPaths.some((path) => url.includes(path) || url)) {
      return
    }

    // eslint-disable-next-line no-console
    console.warn(`[MSW] Warning: Unhandled request ${method} ${url}`)
  },
})

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Pages', 'Layout', 'Common'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'error',
    },
    nextjs: {
      appDirectory: true,
    },
    msw: { handlers: defaultHandlers },
  },
  loaders: [mswLoader],
  decorators: [ThemeProviderDecorator],
}

export default preview
