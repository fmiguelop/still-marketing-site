import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    question: 'Is Still free?',
    answer:
      'Yes. Still is a reader-mode extension with no account and no subscription. Install from the Chrome Web Store when it is available.',
  },
  {
    question: 'Does Still track what I read?',
    answer: (
      <>
        No. Article extraction runs locally in your browser using Mozilla
        Readability. The extension does not use analytics or send your reading
        to servers. See our{' '}
        <Link
          href="/privacy"
          className="text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          privacy policy
        </Link>{' '}
        for details.
      </>
    ),
  },
  {
    question: 'Which pages work?',
    answer:
      'Still works best on pages with a clear article body—news, blogs, essays, and long-form posts. If the page has readable main content, Still can usually extract it.',
  },
  {
    question: "When doesn't it work?",
    answer:
      'Still cannot read chrome:// pages, the Chrome Web Store, PDFs, or pages without article content. On those pages you will see a short message instead of a broken reader view.',
  },
  {
    question: 'How do I exit reader mode?',
    answer:
      'Press Esc, click Exit Still in the reader footer, or click the toolbar icon again to return to the original page.',
  },
  {
    question: 'Is Firefox supported?',
    answer:
      'Chrome is available first via the Web Store. A Firefox build exists for development; a Firefox store listing may follow later.',
  },
]

export function Faq() {
  return (
    <section className="px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-8 text-center text-2xl font-bold text-still-ink">
          Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-semibold text-still-ink hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-still-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
