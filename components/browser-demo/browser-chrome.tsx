import type { RefObject } from 'react'
import { StillIcon } from '@/components/still-icon'
import { SAMPLE_ARTICLE } from '@/components/browser-demo/sample-article'

type BrowserChromeProps = {
  isReaderOpen: boolean
  onToggleReader: () => void
  iconRef?: RefObject<HTMLButtonElement | null>
  highlightIcon?: boolean
  interactive?: boolean
}

const iconClassName = (isReaderOpen: boolean, highlightIcon: boolean) =>
  `flex h-6 w-6 flex-shrink-0 items-center justify-center rounded sm:h-7 sm:w-7 ${
    highlightIcon
      ? 'bg-still-sage/15 ring-2 ring-still-sage'
      : isReaderOpen
        ? 'bg-still-sage/15 ring-1 ring-still-sage/40'
        : 'hover:bg-still-paper-elevated'
  }`

export function BrowserChrome({
  isReaderOpen,
  onToggleReader,
  iconRef,
  highlightIcon = false,
  interactive = true,
}: BrowserChromeProps) {
  const iconContent = <StillIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

  return (
    <div className="flex-shrink-0 border-b border-still-border bg-still-paper">
      <div className="flex items-center gap-2 border-b border-still-border px-2 py-1">
        <div className="flex gap-1" aria-hidden="true">
          <div className="h-2 w-2 rounded-full bg-still-border" />
          <div className="h-2 w-2 rounded-full bg-still-border" />
          <div className="h-2 w-2 rounded-full bg-still-border" />
        </div>
        <div className="inline-flex min-w-0 max-w-[55%] items-center rounded-t border border-b-0 border-still-border bg-still-paper-elevated px-2 py-0.5 text-[10px] leading-tight text-still-ink sm:text-[11px]">
          <span className="truncate">{SAMPLE_ARTICLE.tabTitle}</span>
        </div>
      </div>

      <div className="relative flex items-center gap-1.5 px-2 py-1">
        <div className="min-w-0 flex-1 truncate rounded bg-still-paper-elevated px-2 py-0.5 text-[10px] leading-tight text-still-muted sm:text-[11px]">
          {SAMPLE_ARTICLE.url}
        </div>
        {interactive ? (
          <button
            ref={iconRef}
            type="button"
            onClick={onToggleReader}
            aria-label="Try Still reader mode"
            aria-expanded={isReaderOpen}
            className={`${iconClassName(isReaderOpen, highlightIcon)} transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage`}
          >
            {iconContent}
          </button>
        ) : (
          <div
            aria-hidden="true"
            className={iconClassName(isReaderOpen, highlightIcon)}
          >
            {iconContent}
          </div>
        )}
        {highlightIcon && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-1.5 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border-[3px] border-still-sage sm:right-2 sm:h-10 sm:w-10"
          />
        )}
      </div>
    </div>
  )
}
