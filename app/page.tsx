import { Faq } from '@/components/faq'
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
        <HowItWorks />
        <Features />
        <Faq />
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
      <div className="mx-auto max-w-[1120px] text-center">
        <h1 className="mx-auto max-w-[18ch] text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.15] text-still-ink text-balance">
          Quiet reading for the open web.
        </h1>
        <p className="mx-auto mt-6 max-w-[50ch] text-lg leading-relaxed text-still-muted text-pretty">
          Click once. Still removes ads, sidebars, and clutter—leaving the
          article on warm paper. Nothing leaves your browser.
        </p>

        <HeroCtas />

        <p className="mt-8 text-sm font-medium text-still-stone">
          One click. Just the article.
        </p>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Click Still',
      description:
        'On any article page, click the icon in your toolbar.',
    },
    {
      number: '2',
      title: 'Read on warm paper',
      description:
        'The article opens in a calm reader—comfortable type, generous spacing, no clutter.',
    },
    {
      number: '3',
      title: 'Leave anytime',
      description:
        'Press Esc, click Exit Still, or click the icon again to return.',
    },
  ]

  return (
    <section className="border-y border-still-border bg-still-paper-elevated px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-12 text-center text-2xl font-bold text-still-ink">
          How it works
        </h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-still-border bg-still-paper text-lg font-bold text-still-ink">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-still-ink">
                {step.title}
              </h3>
              <p className="text-still-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'No setup',
      description:
        'Install once. No account, no settings—just click when you want to read.',
    },
    {
      title: 'Stays on your device',
      description:
        "Mozilla Readability extracts the article in your browser. We don't run servers or collect your reading.",
    },
    {
      title: 'Built for real articles',
      description:
        'News, blogs, essays—most pages with a clear article body work well.',
    },
  ]

  return (
    <section className="px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-12 text-center text-2xl font-bold text-still-ink">
          Simple by design
        </h2>
        <ul className="space-y-8">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4">
              <span
                className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-still-sage"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-still-ink">{feature.title}</h3>
                <p className="mt-1 text-still-muted">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PrivacyStrip() {
  return (
    <section className="border-y border-still-border bg-still-paper-elevated px-[clamp(1.5rem,5vw,2rem)] py-12">
      <div className="mx-auto max-w-[70ch] text-center">
        <h2 className="mb-4 text-lg font-semibold text-still-ink">
          Your reading stays yours
        </h2>
        <p className="text-still-muted">
          Still extracts articles locally in your browser—no account, no
          analytics in the extension, and nothing sent to our servers. Built for
          readers who value attention and privacy.
        </p>
        <a
          href="/privacy"
          className="mt-4 inline-block text-sm text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
        >
          Read our privacy policy
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-[clamp(1.5rem,5vw,2rem)] py-12">
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
