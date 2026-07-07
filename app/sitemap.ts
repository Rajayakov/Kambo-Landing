import type { MetadataRoute } from 'next'

const BASE_URL = 'https://kambo-landing.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/privacy-policy', '/data-consent', '/oferta', '/disclaimer']

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date('2026-07-04'),
    changeFrequency: route === '' ? 'weekly' : 'yearly',
    priority: route === '' ? 1 : 0.3,
  }))
}
