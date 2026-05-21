import { SAMPLE_ARTICLE } from '@/components/browser-demo/sample-article'

type ClutteredPageProps = {
  showSidebars?: boolean
}

export function ClutteredPage({ showSidebars = false }: ClutteredPageProps) {
  const sidebarVisibility = showSidebars ? 'block' : 'hidden sm:block'

  return (
    <div className="flex min-h-full bg-[#FAFAF8]">
      <aside
        className={`${sidebarVisibility} w-[22%] flex-shrink-0 bg-still-frame p-3`}
        aria-hidden="true"
      >
        <div className="mb-4 h-4 w-16 rounded bg-still-column/20" />
        <div className="space-y-2">
          {[85, 70, 90, 60, 75].map((width) => (
            <div
              key={width}
              className="h-2.5 rounded bg-still-column/10"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
        <div className="mt-6 h-20 rounded bg-still-column/10" />
      </aside>

      <div className="min-w-0 flex-1 p-4 sm:p-5">
        <article>
          <h2 className="text-lg font-bold leading-tight text-still-ink sm:text-xl">
            {SAMPLE_ARTICLE.title}
          </h2>
          <p className="mt-1 text-xs text-still-muted sm:text-sm">
            {SAMPLE_ARTICLE.byline}
          </p>

          <div className="mt-4 flex h-12 items-center justify-center rounded border border-dashed border-still-border bg-still-paper-elevated text-xs text-still-muted">
            Advertisement
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-still-ink/85">
            <p>{SAMPLE_ARTICLE.content[0]}</p>
            <p>{SAMPLE_ARTICLE.content[1]}</p>
          </div>

          <div className="mt-4 rounded border border-still-border bg-still-paper-elevated p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-still-stone">
              Related
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="h-2 w-4/5 rounded bg-still-border" />
              <div className="h-2 w-3/5 rounded bg-still-border" />
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-still-ink/85">
            {SAMPLE_ARTICLE.content[2]}
          </p>
        </article>
      </div>

      <aside
        className={`${showSidebars ? 'block' : 'hidden lg:block'} w-[18%] flex-shrink-0 border-l border-still-border p-3`}
        aria-hidden="true"
      >
        <div className="h-24 rounded bg-still-border/40" />
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded bg-still-border/50" />
          <div className="h-2 w-4/5 rounded bg-still-border/50" />
        </div>
      </aside>
    </div>
  )
}
