import type { Metadata } from 'next'
import Link from 'next/link'
import { PrivacyMarkdown } from '@/components/privacy-markdown'
import { siteName } from '@/lib/site'
import { readPrivacyMarkdown } from '@/lib/zen-mode'

const title = 'Privacy Policy — Still'
const description =
  'How Still handles your data: local article extraction in Chrome, no analytics, no Still-operated servers. Reading preferences stay on your device.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/privacy',
    siteName,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

function extractLastUpdated(markdown: string): string | null {
  const match = markdown.match(/\*\*Last updated:\*\*\s*(.+)/i)
  return match?.[1]?.trim() ?? null
}

export default function PrivacyPage() {
  const content = readPrivacyMarkdown()
  const lastUpdated = extractLastUpdated(content)

  return (
    <main className="min-h-screen px-[clamp(1.5rem,5vw,2rem)] py-16">
      <article className="mx-auto max-w-[70ch]">
        <header className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
          >
            ← Back to Still
          </Link>
          {lastUpdated && (
            <p className="mb-2 text-still-muted">Last updated: {lastUpdated}</p>
          )}
        </header>
        <PrivacyMarkdown content={content} />
      </article>
    </main>
  )
}
