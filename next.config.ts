import { NextConfig } from 'next'
// @ts-expect-error: next-pwa does not provide TypeScript types for import, safe to ignore
import withPWAImport from 'next-pwa'

const withPWA = withPWAImport as (config: NextConfig & { pwa?: Record<string, unknown> }) => NextConfig

const nextConfig: NextConfig = {
  /* config options here */
}

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
