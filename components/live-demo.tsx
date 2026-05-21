"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { StillIcon } from "@/components/still-icon"

const SAMPLE_ARTICLE = {
  title: "The Great Gatsby",
  byline: "F. Scott Fitzgerald · 1925 · public domain",
  content: [
    "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
    '"Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven\'t had the advantages that you\'ve had."',
    "He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.",
    "And, after boasting this way of my tolerance, I come to the admission that it has a limit. When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt from my reaction.",
  ],
}

export function LiveDemo() {
  const [isReaderOpen, setIsReaderOpen] = useState(false)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  const openReader = useCallback(() => {
    setIsReaderOpen(true)
    requestAnimationFrame(() => setIsOverlayVisible(true))
  }, [])

  const closeReader = useCallback(() => {
    setIsOverlayVisible(false)
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

  const handleOverlayTransitionEnd = () => {
    if (!isOverlayVisible) {
      setIsReaderOpen(false)
    }
  }

  return (
    <section id="demo" className="px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-still-border shadow-[0_1px_2px_rgba(26,26,24,0.06)]">
          <button
            type="button"
            onClick={openReader}
            className="group relative block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
            aria-label="Open Still reader demo"
          >
            <Image
              src="/screenshots/before.png"
              alt="Article page with ads and sidebars before Still"
              width={1280}
              height={800}
              className="h-auto w-full"
              priority
            />
            <span className="absolute inset-0 bg-still-ink/0 transition-colors group-hover:bg-still-ink/5" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button
              type="button"
              onClick={openReader}
              className="inline-flex items-center gap-2 rounded-md bg-still-ink px-5 py-3 text-sm font-semibold text-still-paper shadow-[0_1px_2px_rgba(26,26,24,0.12)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-still-sage"
            >
              <StillIcon className="h-4 w-4" />
              Try Still
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-still-muted">
          Demo uses sample content. After install, Still works on most article
          pages. It cannot read chrome:// pages, the Web Store, PDFs, or pages
          without article content.
        </p>
      </div>

      {isReaderOpen && (
        <div
          className={`fixed inset-0 z-50 overflow-auto bg-still-paper transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
            isOverlayVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Still reader view"
          onTransitionEnd={handleOverlayTransitionEnd}
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

            <footer className="mt-12 flex flex-col items-center gap-4 border-t border-still-border pt-8">
              <p className="text-sm text-still-muted">Press Esc to exit</p>
              <button
                type="button"
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
