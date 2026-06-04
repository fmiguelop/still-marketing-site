import type { Metadata } from 'next'
import Link from 'next/link'
import { SyncedMarkdown } from '@/components/synced-markdown'
import { siteName } from '@/lib/site'
import { readChangelogMarkdown } from '@/lib/zen-mode'

const title = 'Changelog — Still'
const description =
  'Release notes for Still, the Chrome reader mode extension: new features, improvements, and fixes by version.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/changelog',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/changelog',
    siteName,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

export default function ChangelogPage() {
  const content = readChangelogMarkdown()

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
        </header>
        <SyncedMarkdown content={content} />
      </article>
    </main>
  )
}
