'use client'

import { useCallback, useRef, useState, type RefObject } from 'react'
import {
  SAMPLE_ARTICLE,
  type ReaderTheme,
} from '@/components/browser-demo/sample-article'

type ReaderPanelProps = {
  onClose: () => void
  exitRef?: RefObject<HTMLButtonElement | null>
}

const THEME_OPTIONS: { value: ReaderTheme; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'warm', label: 'Warm' },
]

const THEME_STYLES: Record<
  ReaderTheme,
  {
    root: string
    title: string
    body: string
    muted: string
    border: string
    btnBg: string
    btnBorder: string
    btnLabel: string
    accent: string
    progressTrack: string
  }
> = {
  light: {
    root: 'bg-still-paper',
    title: 'text-still-ink',
    body: 'text-still-ink',
    muted: 'text-still-muted',
    border: 'border-still-border',
    btnBg: 'bg-still-paper-elevated',
    btnBorder: 'border-still-button-border',
    btnLabel: 'text-still-button-label',
    accent: 'bg-still-sage',
    progressTrack: 'bg-still-border',
  },
  dark: {
    root: 'bg-[#121212]',
    title: 'text-[#F2F2F2]',
    body: 'text-[#D8D8D8]',
    muted: 'text-[#9A9A96]',
    border: 'border-[#2E2E2E]',
    btnBg: 'bg-[#1E1E1E]',
    btnBorder: 'border-[#3A3A3A]',
    btnLabel: 'text-[#B0B0B0]',
    accent: 'bg-[#7A9E8C]',
    progressTrack: 'bg-[#2E2E2E]',
  },
  warm: {
    root: 'bg-[#F4F0E6]',
    title: 'text-still-ink',
    body: 'text-still-ink',
    muted: 'text-still-muted',
    border: 'border-still-border',
    btnBg: 'bg-still-paper-elevated',
    btnBorder: 'border-still-button-border',
    btnLabel: 'text-still-button-label',
    accent: 'bg-still-sage',
    progressTrack: 'bg-still-border',
  },
}

export function ReaderPanel({ onClose, exitRef }: ReaderPanelProps) {
  const [theme, setTheme] = useState<ReaderTheme>('light')
  const [progress, setProgress] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const styles = THEME_STYLES[theme]

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const maxScroll = el.scrollHeight - el.clientHeight
    setProgress(maxScroll > 0 ? el.scrollTop / maxScroll : 0)
  }, [])

  return (
    <div className={`relative flex h-full min-h-0 flex-col ${styles.root}`}>
      <div
        className={`absolute left-0 right-0 top-0 z-10 h-0.5 ${styles.progressTrack}`}
        aria-hidden
      >
        <div
          className={`h-full origin-left ${styles.accent}`}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6"
      >
        <article className="mx-auto max-w-[70ch]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {THEME_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setTheme(option.value)}
                className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage ${
                  theme === option.value
                    ? `${styles.btnBg} ${styles.btnBorder} ${styles.btnLabel} border-current`
                    : `border-transparent ${styles.muted} hover:opacity-80`
                }`}
                aria-pressed={theme === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>

          <h1
            className={`mb-1.5 text-[1.75rem] font-bold leading-tight ${styles.title}`}
          >
            {SAMPLE_ARTICLE.title}
          </h1>
          <p className={`mb-6 text-sm ${styles.muted}`}>
            {SAMPLE_ARTICLE.byline} · {SAMPLE_ARTICLE.readingTime}
          </p>
          <div className="space-y-5">
            {SAMPLE_ARTICLE.content.map((paragraph, i) => (
              <p key={i} className={`text-lg leading-[1.6] ${styles.body}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <footer
          className={`mx-auto mt-8 flex max-w-[70ch] flex-col items-center gap-3 border-t pt-6 ${styles.border}`}
        >
          <p className={`text-sm ${styles.muted}`}>
            Press Esc to exit · + − to adjust text size
          </p>
          <button
            ref={exitRef}
            type="button"
            onClick={onClose}
            className={`rounded-md border px-4 py-2 text-sm transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage ${styles.btnBg} ${styles.btnBorder} ${styles.btnLabel}`}
          >
            Exit Still
          </button>
        </footer>
      </div>
    </div>
  )
}
