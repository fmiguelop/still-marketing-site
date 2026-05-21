export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Which pages work?',
    answer:
      'Still works best on pages with a clear article body—news, blogs, essays, and long-form posts. If the page has readable main content, Still can usually extract it. It cannot read chrome:// pages, the Chrome Web Store, PDFs, or pages without article content.',
  },
  {
    question: 'Can I change how it looks?',
    answer:
      'Yes. Open Options from the extension menu to pick light, dark, or warm theme, text size, and column width. Changes apply live while you read.',
  },
  {
    question: 'Is my reading private?',
    answer:
      'Article extraction runs locally in your browser. Still does not send your reading to our servers. Display preferences are stored on your device and may sync through Chrome if you use browser sync.',
  },
]
