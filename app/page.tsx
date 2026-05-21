import Image from 'next/image'
import Link from 'next/link'
import { HeroCtas } from '@/components/hero-ctas'
import { LiveDemo } from '@/components/live-demo'
import { StillIcon } from '@/components/still-icon'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LiveDemo />
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

function Hero() {
  return (
    <section className="px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h1 className="max-w-[18ch] text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.15] text-still-ink text-balance">
            Quiet reading for the open web.
          </h1>
          <p className="mt-6 max-w-[45ch] text-lg leading-relaxed text-still-muted text-pretty">
            Click once. Still removes ads, sidebars, and clutter—leaving the
            article on warm paper. Nothing leaves your browser.
          </p>

          <HeroCtas align="start" />

          <p className="mt-8 text-sm font-medium text-still-stone">
            One click. Just the article.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-still-border shadow-[0_1px_2px_rgba(26,26,24,0.06)]">
          <Image
            src="/screenshots/screenshot-01-hero.png"
            alt="Before and after: cluttered article page compared to Still reader view"
            width={1280}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}

function HowStillWorks() {
  return (
    <section className="border-y border-still-border bg-still-paper-elevated px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24">
      <div className="mx-auto max-w-[70ch] space-y-10">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-still-ink">How it works</h2>
          <p className="text-lg leading-relaxed text-still-muted">
            On any article page, click Still in your toolbar. The article opens
            on warm paper—comfortable type, generous spacing, no clutter. Press
            Esc, click Exit Still, or click the icon again to return.
          </p>
        </div>

        <div>
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

        <div>
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
    </section>
  )
}

function PrivacyStrip() {
  return (
    <section className="px-[clamp(1.5rem,5vw,2rem)] py-12 md:py-16">
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
    </section>
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
