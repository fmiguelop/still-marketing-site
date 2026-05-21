import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const proseClass =
  'privacy-prose space-y-6 text-lg leading-relaxed text-still-ink [&_h1]:text-[2rem] [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-still-muted [&_li]:text-still-muted [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-still-border [&_th]:bg-still-paper-elevated [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-still-ink [&_td]:border [&_td]:border-still-border [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-still-muted [&_strong]:font-semibold [&_strong]:text-still-ink'

export function PrivacyMarkdown({ content }: { content: string }) {
  return (
    <div className={proseClass}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => {
          const isMailto = href?.startsWith('mailto:')
          const isExternal = href?.startsWith('http')
          if (isMailto || isExternal) {
            return (
              <a
                href={href}
                className="text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70"
              >
                {children}
              </a>
            )
          }
          return (
            <Link
              href={href ?? '#'}
              className="text-still-sage underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {children}
            </Link>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  )
}
