import Link from 'next/link'
import { HowItWorksIntro } from '@/components/how-it-works-intro'
import { HomeHero } from '@/components/home-hero'
import { RevealSection } from '@/components/reveal-section'
import { HomeStructuredData } from '@/components/structured-data'
import { StillIcon } from '@/components/still-icon'
import { faqItems } from '@/lib/faq'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeStructuredData />
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
          <HowItWorksIntro />
        </div>

        <div data-reveal-item>
          <h2 className="mb-4 text-2xl font-bold text-still-ink">What you get</h2>
          <div className="space-y-4 text-lg leading-relaxed text-still-muted">
            <p>
              Install once. No account, no setup—just click when you want to read.
              Optional preferences in Options: light, dark, or warm theme; text
              size; and column width.
            </p>
            <p>
              Mozilla Readability extracts the article in your browser. Long
              articles show a quiet progress bar and reading time estimate. We
              don&apos;t run servers or collect your reading.
            </p>
            <p>
              News, blogs, essays—most pages with a clear article body work well.
            </p>
          </div>
        </div>

        <div data-reveal-item>
          <h2 className="mb-4 text-2xl font-bold text-still-ink">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-still-ink">{item.question}</h3>
                <p className="mt-2 text-lg leading-relaxed text-still-muted">
                  {item.answer}
                  {item.question === 'Is my reading private?' && (
                    <>
                      {' '}
                      <Link
                        href="/privacy"
                        className="text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70"
                      >
                        Read our privacy policy
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  )
}

const privacyStripItems = [
  {
    label: 'Your data',
    description:
      "Still doesn't collect analytics, track your history, or ping any background servers. I don't know who you are or what you're reading.",
  },
  {
    label: 'Accounts',
    description:
      'None. No logins, no passwords, no onboarding screens. Just click and read.',
  },
  {
    label: 'Syncing',
    description:
      'If you change your theme or text size, Chrome saves those preferences to your Google profile automatically. No third-party databases involved.',
  },
] as const

function PrivacyStrip() {
  return (
    <RevealSection
      stagger
      className="px-[clamp(1.5rem,5vw,2rem)] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <dl className="space-y-6 md:space-y-8">
          {privacyStripItems.map((item) => (
            <div
              key={item.label}
              data-reveal-item
              className="grid gap-2 md:grid-cols-[minmax(7rem,9rem)_1fr] md:gap-x-10"
            >
              <dt className="font-semibold text-still-ink">{item.label}</dt>
              <dd className="m-0 text-lg leading-relaxed text-still-muted">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          data-reveal-item
          href="/privacy"
          className="mt-8 inline-block text-sm text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage md:mt-10"
        >
          → Read the privacy policy
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
