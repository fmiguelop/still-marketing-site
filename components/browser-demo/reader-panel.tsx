import type { RefObject } from 'react'
import { SAMPLE_ARTICLE } from '@/components/browser-demo/sample-article'

type ReaderPanelProps = {
  onClose: () => void
  exitRef?: RefObject<HTMLButtonElement | null>
}

export function ReaderPanel({ onClose, exitRef }: ReaderPanelProps) {
  return (
    <div className="min-h-full bg-still-paper px-4 py-5 sm:px-6 sm:py-6">
      <article className="mx-auto max-w-[70ch]">
        <h1 className="mb-1.5 text-[1.75rem] font-bold leading-tight text-still-ink">
          {SAMPLE_ARTICLE.title}
        </h1>
        <p className="mb-6 text-sm text-still-muted">{SAMPLE_ARTICLE.byline}</p>
        <div className="space-y-5">
          {SAMPLE_ARTICLE.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-[1.6] text-still-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <footer className="mx-auto mt-8 flex max-w-[70ch] flex-col items-center gap-3 border-t border-still-border pt-6">
        <p className="text-sm text-still-muted">Press Esc to exit</p>
        <button
          ref={exitRef}
          type="button"
          onClick={onClose}
          className="rounded-md border border-still-button-border bg-still-paper-elevated px-4 py-2 text-sm text-still-button-label transition-colors hover:border-still-border hover:bg-still-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
        >
          Exit Still
        </button>
      </footer>
    </div>
  )
}
