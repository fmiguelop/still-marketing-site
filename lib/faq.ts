export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Which pages work?',
    answer:
      'Still works best on pages with a clear article body: news, blogs, essays, and long-form posts. If the page has readable main content, Still can usually extract it. It cannot read chrome:// pages, the Chrome Web Store, PDFs, or pages without article content.',
  },
  {
    question: 'Can I change how it looks?',
    answer:
      'Yes. Change light, dark, or warm theme, text size, and column width from the reader dock while you read, or set defaults in Options from the extension menu. Changes apply live.',
  },
  {
    question: 'Which languages does Still support?',
    answer:
      "Still's interface is available in English and Spanish. The extension follows your browser's display language, there is no separate language setting inside Still. Article text is not translated; Still only reformats the page you're already reading.",
  },
  {
    question: 'Is my reading private?',
    answer:
      'Article extraction runs locally in your browser. Still does not send your reading to our servers. Display preferences are stored on your device and may sync through Chrome if you use browser sync.',
  },
]
