import { MetadataRoute } from 'next'

import { PUBLIC_ROUTES } from '@/constants/routes'
import { publicConfig } from '@/services/config'

const sitemap = (): MetadataRoute.Sitemap => {
  const { NEXT_PUBLIC_BASE_URL } = publicConfig

  return PUBLIC_ROUTES.map((path) => ({
    url: `${NEXT_PUBLIC_BASE_URL}${path}`,
    changeFrequency: 'yearly',
  }))
}

export default sitemap
