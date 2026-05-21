import type { RefObject } from 'react'
import { StillIcon } from '@/components/still-icon'
import { SAMPLE_ARTICLE } from '@/components/browser-demo/sample-article'

type BrowserChromeProps = {
  isReaderOpen: boolean
  onToggleReader: () => void
  iconRef?: RefObject<HTMLButtonElement | null>
}

export function BrowserChrome({
  isReaderOpen,
  onToggleReader,
  iconRef,
}: BrowserChromeProps) {
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

      <div className="flex items-center gap-1.5 px-2 py-1">
        <div className="min-w-0 flex-1 truncate rounded bg-still-paper-elevated px-2 py-0.5 text-[10px] leading-tight text-still-muted sm:text-[11px]">
          {SAMPLE_ARTICLE.url}
        </div>
        <button
          ref={iconRef}
          type="button"
          onClick={onToggleReader}
          aria-label="Try Still reader mode"
          aria-expanded={isReaderOpen}
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage sm:h-7 sm:w-7 ${
            isReaderOpen
              ? 'bg-still-sage/15 ring-1 ring-still-sage/40'
              : 'hover:bg-still-paper-elevated'
          }`}
        >
          <StillIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  )
}
