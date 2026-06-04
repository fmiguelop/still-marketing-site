import { statSync } from 'node:fs'
import type { MetadataRoute } from 'next'
import { resolveChangelogMarkdownPath, resolvePrivacyMarkdownPath } from '@/lib/zen-mode'
import { siteUrl } from '@/lib/site'

function fileLastModified(resolvePath: () => string): Date {
  try {
    return statSync(resolvePath()).mtime
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
      lastModified: fileLastModified(resolvePrivacyMarkdownPath),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/changelog`,
      lastModified: fileLastModified(resolveChangelogMarkdownPath),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
