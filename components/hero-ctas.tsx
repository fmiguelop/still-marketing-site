import { Puzzle } from 'lucide-react'
import { StillIcon } from '@/components/still-icon'

const storeUrl = process.env.NEXT_PUBLIC_CHROME_STORE_URL

const tryStillA11yProps = {
  'aria-hidden': true as const,
  tabIndex: -1,
}

const primaryButtonClass =
  'inline-flex items-center gap-2 rounded-md bg-still-ink px-6 py-3 text-sm font-semibold text-still-paper transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage'

const secondaryButtonClass =
  'inline-flex items-center gap-2 rounded-md border border-still-button-border bg-still-paper-elevated px-6 py-3 text-sm font-medium text-still-button-label transition-colors hover:border-still-border hover:bg-still-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage'

type HeroCtasProps = {
  align?: 'center' | 'start'
  onTryStill?: () => void
}

export function HeroCtas({ align = 'center', onTryStill }: HeroCtasProps) {
  const containerClass =
    align === 'start'
      ? 'mt-9 flex flex-col items-start gap-4 sm:flex-row md:mt-10'
      : 'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'

  const tryStillButton = onTryStill ? (
    <button
      type="button"
      onClick={onTryStill}
      className={secondaryButtonClass}
      {...tryStillA11yProps}
    >
      <StillIcon className="h-4 w-4" />
      Try Still
    </button>
  ) : null

  if (storeUrl) {
    return (
      <div className={containerClass}>
        <a href={storeUrl} className={primaryButtonClass}>
          <Puzzle className="h-4 w-4" aria-hidden />
          Add to Chrome
        </a>
        {onTryStill ? (
          tryStillButton
        ) : (
          <button type="button" onClick={onTryStill} className={secondaryButtonClass} {...tryStillA11yProps}>
            <StillIcon className="h-4 w-4" />
            Try Still
          </button>
        )}
      </div>
    )
  }

  return (
    <div className={containerClass}>
      {onTryStill ? (
        <button
          type="button"
          onClick={onTryStill}
          className={primaryButtonClass}
          {...tryStillA11yProps}
        >
          <StillIcon className="h-4 w-4" />
          Try Still free
        </button>
      ) : (
        <span className={primaryButtonClass} {...tryStillA11yProps}>
          <StillIcon className="h-4 w-4" />
          Try Still free
        </span>
      )}
      <button
        type="button"
        aria-disabled="true"
        className="inline-flex items-center gap-2 rounded-md border border-still-border bg-still-paper px-6 py-3 text-sm font-medium text-still-muted opacity-70"
      >
        <Puzzle className="h-4 w-4" />
        Add to Chrome
      </button>
    </div>
  )
}
