import { NEXT_ROUTES } from '@/constants/routes'
import { publicConfig } from '@/services/config'
import { MetadataRoute } from 'next'

const PLACEHOLDER_ROUTES = Object.values(NEXT_ROUTES).filter((route) => !['/', '/games'].includes(route))

const robots = (): MetadataRoute.Robots => {
  if (publicConfig.NEXT_PUBLIC_ROBOTS_ALLOW) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: PLACEHOLDER_ROUTES,
        },

        {
          userAgent: 'ia-archiver',
          disallow: '/',
        },
      ],
      sitemap: `${publicConfig.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    }
  }
  return { rules: [{ userAgent: '*', disallow: '/' }] }
}

export default robots
