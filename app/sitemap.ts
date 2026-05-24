import { statSync } from 'node:fs'
import type { MetadataRoute } from 'next'
import { resolvePrivacyMarkdownPath } from '@/lib/zen-mode'
import { siteUrl } from '@/lib/site'

function privacyLastModified(): Date {
  try {
    return statSync(resolvePrivacyMarkdownPath()).mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: privacyLastModified(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
