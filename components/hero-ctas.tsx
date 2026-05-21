import { StillIcon } from '@/components/still-icon'

const storeUrl = process.env.NEXT_PUBLIC_CHROME_STORE_URL

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V2" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 14L3.5 21" stroke="currentColor" strokeWidth="2" />
      <path d="M15.5 14L20.5 21" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const primaryButtonClass =
  'inline-flex items-center gap-2 rounded-md bg-still-ink px-6 py-3 text-sm font-semibold text-still-paper transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage'

const secondaryButtonClass =
  'inline-flex items-center gap-2 rounded-md border border-still-button-border bg-still-paper-elevated px-6 py-3 text-sm font-medium text-still-button-label transition-colors hover:border-still-border hover:bg-still-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage'

type HeroCtasProps = {
  align?: 'center' | 'start'
}

export function HeroCtas({ align = 'center' }: HeroCtasProps) {
  const containerClass =
    align === 'start'
      ? 'mt-10 flex flex-col items-start gap-4 sm:flex-row'
      : 'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'

  if (storeUrl) {
    return (
      <div className={containerClass}>
        <a href={storeUrl} className={primaryButtonClass}>
          <ChromeIcon className="h-4 w-4" />
          Add to Chrome
        </a>
        <a href="#demo" className={secondaryButtonClass}>
          <StillIcon className="h-4 w-4" />
          Try Still
        </a>
      </div>
    )
  }

  return (
    <div className={containerClass}>
      <a href="#demo" className={primaryButtonClass}>
        <StillIcon className="h-4 w-4" />
        Try Still free
      </a>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-still-border bg-still-paper px-6 py-3 text-sm font-medium text-still-muted opacity-70"
      >
        <ChromeIcon className="h-4 w-4" />
        Add to Chrome — Coming soon
      </button>
    </div>
  )
}
