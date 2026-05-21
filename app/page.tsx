import Link from 'next/link'
import { HomeHero } from '@/components/home-hero'
import { RevealSection } from '@/components/reveal-section'
import { StillIcon } from '@/components/still-icon'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeHero />
        <HowStillWorks />
        <PrivacyStrip />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-still-border bg-still-paper">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-[clamp(1.5rem,5vw,2rem)] py-4">
        <a
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
        >
          <StillIcon className="h-8 w-8" />
          <span className="text-lg font-bold text-still-ink">Still</span>
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-sm text-still-sage underline decoration-still-sage/50 underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
          >
            Privacy
          </a>
          <a
            href="mailto:hello@fmiguelop.dev"
            className="text-sm text-still-sage underline decoration-still-sage/50 underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

function HowStillWorks() {
  return (
    <RevealSection
      stagger
      className="border-y border-still-border bg-still-paper-elevated px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[70ch] space-y-10">
        <div data-reveal-item>
          <h2 className="mb-4 text-2xl font-bold text-still-ink">How it works</h2>
          <p className="text-lg leading-relaxed text-still-muted">
            On any article page, click Still in your toolbar. The article opens
            on warm paper—comfortable type, generous spacing, no clutter. Press
            Esc, click Exit Still, or click the icon again to return.
          </p>
        </div>

        <div data-reveal-item>
          <h2 className="mb-4 text-2xl font-bold text-still-ink">What you get</h2>
          <div className="space-y-4 text-lg leading-relaxed text-still-muted">
            <p>
              Install once. No account, no settings—just click when you want to
              read.
            </p>
            <p>
              Mozilla Readability extracts the article in your browser. We
              don&apos;t run servers or collect your reading.
            </p>
            <p>
              News, blogs, essays—most pages with a clear article body work
              well.
            </p>
          </div>
        </div>

        <div data-reveal-item>
          <h2 className="mb-4 text-2xl font-bold text-still-ink">
            Common questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-still-ink">
                Which pages work?
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-still-muted">
                Still works best on pages with a clear article body—news, blogs,
                essays, and long-form posts. If the page has readable main
                content, Still can usually extract it. It cannot read chrome://
                pages, the Chrome Web Store, PDFs, or pages without article
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}

function PrivacyStrip() {
  return (
    <RevealSection className="px-[clamp(1.5rem,5vw,2rem)] py-12 md:py-16">
      <div className="mx-auto max-w-[70ch]">
        <h2 className="mb-4 text-lg font-semibold text-still-ink">
          Your reading stays yours
        </h2>
        <p className="text-lg leading-relaxed text-still-muted">
          Still extracts articles locally in your browser using Mozilla
          Readability. The extension does not use analytics or send your reading
          to servers—no account required. Built for readers who value attention
          and privacy.
        </p>
        <Link
          href="/privacy"
          className="mt-4 inline-block text-sm text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
        >
          Read our privacy policy
        </Link>
      </div>
    </RevealSection>
  )
}

function Footer() {
  return (
    <footer className="border-t border-still-border px-[clamp(1.5rem,5vw,2rem)] py-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-still-muted">© Still</p>
          <nav className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-still-sage underline decoration-still-sage/50 underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
            >
              Privacy
            </a>
            <a
              href="mailto:hello@fmiguelop.dev"
              className="text-sm text-still-sage underline decoration-still-sage/50 underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
            >
              hello@fmiguelop.dev
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
