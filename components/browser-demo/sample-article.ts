export const SAMPLE_ARTICLE = {
  title: 'The Great Gatsby',
  byline: 'F. Scott Fitzgerald · 1925 · public domain',
  readingTime: '4 min read',
  url: 'gutenberg.org/ebooks/64317',
  tabTitle: 'The Great Gatsby',
  content: [
    "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
    '"Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven\'t had the advantages that you\'ve had."',
    "He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.",
    "And, after boasting this way of my tolerance, I come to the admission that it has a limit. When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt from my reaction.",
    'There was something gorgeous about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that register earthquakes ten thousand miles away.',
    'The lawn started at the beach and ran toward the front door for a quarter of a mile, jumping over sundials and brick walks and burning gardens—finally when it reached the house drifting up the side in bright vines as though from the momentum of its run.',
    'He smiled understandingly—much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life.',
  ],
} as const

export type ReaderTheme = 'light' | 'dark' | 'warm'
