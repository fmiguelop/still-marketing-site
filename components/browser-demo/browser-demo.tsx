'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { BrowserFrameStatic } from '@/components/browser-demo/browser-frame-static'
import { ClutteredPage } from '@/components/browser-demo/cluttered-page'
import { ReaderPanel } from '@/components/browser-demo/reader-panel'
import { initGsap, prefersReducedMotion, STILL_EASE } from '@/lib/motion'

export type BrowserDemoHandle = {
  openReader: () => void
  closeReader: () => void
  toggleReader: () => void
}

type BrowserDemoProps = {
  className?: string
}

export const BrowserDemo = forwardRef<BrowserDemoHandle, BrowserDemoProps>(
  function BrowserDemo({ className }, ref) {
    const [isReaderOpen, setIsReaderOpen] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [readerKey, setReaderKey] = useState(0)
    const frameRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLButtonElement>(null)
    const exitRef = useRef<HTMLButtonElement>(null)
    const clutterRef = useRef<HTMLDivElement>(null)
    const readerRef = useRef<HTMLDivElement>(null)
    const pulseTweenRef = useRef<gsap.core.Tween | null>(null)

    const openReader = useCallback(() => {
      setHasInteracted(true)
      setIsReaderOpen(true)
    }, [])

    const closeReader = useCallback(() => {
      setIsReaderOpen(false)
      setReaderKey((key) => key + 1)
    }, [])

    const toggleReader = useCallback(() => {
      setHasInteracted(true)
      setIsReaderOpen((open) => !open)
    }, [])

    useImperativeHandle(ref, () => ({
      openReader,
      closeReader,
      toggleReader,
    }))

    useGSAP(
      () => {
        initGsap()
        const icon = iconRef.current
        if (!icon || prefersReducedMotion() || hasInteracted) return

        pulseTweenRef.current = gsap.to(icon, {
          scale: 1.08,
          duration: 1.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      },
      { scope: frameRef, dependencies: [hasInteracted], revertOnUpdate: false }
    )

    useEffect(() => {
      if (hasInteracted) {
        pulseTweenRef.current?.kill()
        gsap.set(iconRef.current, { scale: 1 })
      }
    }, [hasInteracted])

    useGSAP(
      () => {
        const clutter = clutterRef.current
        const reader = readerRef.current
        if (!clutter || !reader) return

        if (prefersReducedMotion()) {
          gsap.set(clutter, {
            autoAlpha: isReaderOpen ? 0 : 1,
            display: isReaderOpen ? 'none' : 'block',
          })
          gsap.set(reader, {
            autoAlpha: isReaderOpen ? 1 : 0,
            display: isReaderOpen ? 'block' : 'none',
            y: 0,
          })
          return
        }

        if (isReaderOpen) {
          gsap.set(reader, { display: 'block' })
          gsap.to(clutter, {
            autoAlpha: 0,
            duration: 0.2,
            ease: STILL_EASE,
            onComplete: () => gsap.set(clutter, { display: 'none' }),
          })
          gsap.fromTo(
            reader,
            { autoAlpha: 0, y: 8 },
            { autoAlpha: 1, y: 0, duration: 0.25, ease: STILL_EASE, delay: 0.05 }
          )
        } else {
          gsap.set(clutter, { display: 'block' })
          gsap.to(reader, {
            autoAlpha: 0,
            y: 8,
            duration: 0.15,
            ease: STILL_EASE,
            onComplete: () => gsap.set(reader, { display: 'none' }),
          })
          gsap.to(clutter, {
            autoAlpha: 1,
            duration: 0.2,
            ease: STILL_EASE,
            delay: 0.05,
          })
        }
      },
      { dependencies: [isReaderOpen] }
    )

    useEffect(() => {
      if (!isReaderOpen) return
      exitRef.current?.focus()
    }, [isReaderOpen])

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isReaderOpen) {
          closeReader()
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isReaderOpen, closeReader])

    return (
      <div className={className}>
        <p className="sr-only">
          The following interactive preview is visual only and is not required to
          use Still.
        </p>
        <div aria-hidden="true">
        <BrowserFrameStatic
          frameRef={frameRef}
          data-hero-shot
          className="aspect-[16/10]"
          isReaderOpen={isReaderOpen}
          onToggleReader={toggleReader}
          iconRef={iconRef}
        >
          <div
            role="region"
            aria-label="Browser page content"
            className="relative h-full overflow-y-auto"
          >
            <div ref={clutterRef} className="absolute inset-0">
              <ClutteredPage />
            </div>
            <div
              ref={readerRef}
              className="absolute inset-0"
              style={{ display: 'none', opacity: 0 }}
              aria-hidden={!isReaderOpen}
            >
              <ReaderPanel
                key={readerKey}
                onClose={closeReader}
                exitRef={exitRef}
              />
            </div>
          </div>
        </BrowserFrameStatic>

        <p className="mt-4 text-sm text-still-muted">
          Demo uses sample content. After install, Still works on most article
          pages. It cannot read chrome:// pages, the Web Store, PDFs, or pages
          without article content.
        </p>
        </div>
      </div>
    )
  }
)
