"use client"

import { useState, useEffect, useCallback } from "react"
import { StillIcon } from "@/components/still-icon"

const SAMPLE_ARTICLE = {
  title: "The Quiet Art of Deep Reading",
  byline: "By Sarah Chen · 8 min read",
  content: [
    "In an age of infinite scrolling and constant notifications, the simple act of reading an article from start to finish has become surprisingly rare. We skim, we scan, we jump between tabs—but how often do we truly read?",
    "Deep reading requires a different kind of attention. It asks us to slow down, to let ideas build upon each other, to follow an author's thinking to its conclusion. This kind of reading changes us in ways that skimming cannot.",
    "The benefits extend beyond comprehension. Studies show that sustained reading improves focus, reduces stress, and strengthens our capacity for empathy. When we read deeply, we practice the very skills that feel most endangered in our distracted age.",
    "Creating the conditions for deep reading matters. A quiet space. A clear screen. The absence of visual noise. These aren't luxuries—they're requirements for the kind of attention that transforms information into understanding.",
  ],
}

export function LiveDemo() {
  const [isReaderOpen, setIsReaderOpen] = useState(false)

  const closeReader = useCallback(() => {
    setIsReaderOpen(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isReaderOpen) {
        closeReader()
      }
    }

    if (isReaderOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isReaderOpen, closeReader])

  return (
    <section id="demo" className="px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-4 text-center text-2xl font-bold text-still-ink">
          See Still in action
        </h2>
        <p className="mx-auto mb-8 max-w-[50ch] text-center text-lg text-still-muted">
          Click the button to experience the reader view.
        </p>

        {/* Browser Frame Mock */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-still-border bg-still-paper-elevated shadow-[0_1px_2px_rgba(26,26,24,0.06)]">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 border-b border-still-border bg-still-paper px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-still-border" />
              <div className="h-3 w-3 rounded-full bg-still-border" />
              <div className="h-3 w-3 rounded-full bg-still-border" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-still-paper-elevated px-3 py-1.5 text-sm text-still-muted">
              example.com/article/deep-reading
            </div>
            {/* Still Extension Icon in toolbar */}
            <button
              onClick={() => setIsReaderOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
              aria-label="Activate Still reader mode"
            >
              <StillIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Cluttered Article Page */}
          <div className="flex min-h-[400px]">
            {/* Dark Sidebar */}
            <div className="hidden w-48 flex-shrink-0 bg-still-frame p-4 md:block">
              <div className="mb-6 h-6 w-20 rounded bg-still-column/20" />
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 rounded bg-still-column/10"
                    style={{ width: `${60 + Math.random() * 40}%` }}
                  />
                ))}
              </div>
              <div className="mt-8 space-y-2">
                <div className="h-24 rounded bg-still-column/10" />
                <div className="h-3 w-16 rounded bg-still-column/10" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
              <div className="mx-auto max-w-2xl">
                {/* Ad Banner Mock */}
                <div className="mb-6 flex h-16 items-center justify-center rounded-lg border border-dashed border-still-border bg-still-paper text-sm text-still-muted">
                  Advertisement
                </div>

                {/* Article Content */}
                <article>
                  <h1 className="mb-2 text-2xl font-bold text-still-ink">
                    {SAMPLE_ARTICLE.title}
                  </h1>
                  <p className="mb-6 text-sm text-still-muted">
                    {SAMPLE_ARTICLE.byline}
                  </p>
                  <div className="space-y-4 text-still-ink/80">
                    <p className="leading-relaxed">
                      {SAMPLE_ARTICLE.content[0]}
                    </p>
                    {/* Inline "Related" distraction */}
                    <div className="rounded-lg border border-still-border bg-still-paper-elevated p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-still-stone">
                        Related Articles
                      </p>
                      <div className="space-y-2">
                        <div className="h-3 w-3/4 rounded bg-still-border" />
                        <div className="h-3 w-2/3 rounded bg-still-border" />
                      </div>
                    </div>
                    <p className="leading-relaxed">
                      {SAMPLE_ARTICLE.content[1]}
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden w-40 flex-shrink-0 border-l border-still-border p-4 lg:block">
              <div className="mb-4 h-32 rounded-lg bg-still-border/50" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-still-border/50" />
                <div className="h-3 w-3/4 rounded bg-still-border/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Try Still Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsReaderOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-still-ink px-5 py-3 text-sm font-semibold text-still-paper transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
          >
            <StillIcon className="h-4 w-4" />
            Try Still
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-center text-sm text-still-muted">
          Demo uses sample content. After install, Still works on most article
          pages. It cannot read chrome:// pages, the Web Store, PDFs, or pages
          without article content.
        </p>
      </div>

      {/* Reader Overlay */}
      {isReaderOpen && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-still-paper"
          role="dialog"
          aria-modal="true"
          aria-label="Still reader view"
        >
          <div className="mx-auto max-w-[70ch] px-6 py-12 md:py-16">
            <article>
              <h1 className="mb-2 text-[1.75rem] font-bold leading-tight text-still-ink">
                {SAMPLE_ARTICLE.title}
              </h1>
              <p className="mb-8 text-sm text-still-muted">
                {SAMPLE_ARTICLE.byline}
              </p>
              <div className="space-y-6">
                {SAMPLE_ARTICLE.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-[1.6] text-still-ink"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {/* Footer */}
            <footer className="mt-12 flex flex-col items-center gap-4 border-t border-still-border pt-8">
              <p className="text-sm text-still-muted">Press Esc to exit</p>
              <button
                onClick={closeReader}
                className="rounded-md border border-still-button-border bg-still-paper-elevated px-4 py-2 text-sm text-still-button-label transition-colors hover:border-still-border hover:bg-still-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
              >
                Exit Still
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  )
}
