import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { services } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/team',
    '/common-injuries',
    '/testimonials',
    '/contact',
    '/book-now',
    '/faq',
    '/privacy-policy',
  ]

  const serviceRoutes = services.map((s) => `/services/${s.slug}`)

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.7 : 0.6,
  }))
}
