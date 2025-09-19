// public variables need to referenced with full process.env.NEXT_PUBLIC_{NAME} format
// in order to be replaced by nextjs at build time
export const publicConfig = {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  NEXT_PUBLIC_ROBOTS_ALLOW: process.env.NEXT_PUBLIC_ROBOTS_ALLOW,
}
