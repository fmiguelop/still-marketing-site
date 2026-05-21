'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  BrowserDemo,
  type BrowserDemoHandle,
} from '@/components/browser-demo/browser-demo'
import { HeroCtas } from '@/components/hero-ctas'
import { initGsap, prefersReducedMotion, STILL_EASE } from '@/lib/motion'

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const demoRef = useRef<BrowserDemoHandle>(null)

  useGSAP(
    () => {
      initGsap()

      const copy = sectionRef.current?.querySelector('[data-hero-copy]')
      const screenshot = sectionRef.current?.querySelector('[data-hero-shot]')
      const copyItems = copy?.querySelectorAll('[data-hero-item]')

      if (prefersReducedMotion()) {
        gsap.set([copyItems, screenshot], { autoAlpha: 1, y: 0, scale: 1 })
        return
      }

      if (copyItems?.length) {
        gsap.fromTo(
          copyItems,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: STILL_EASE,
            delay: 0.05,
          }
        )
      }

      if (screenshot) {
        gsap.fromTo(
          screenshot,
          { autoAlpha: 0, y: 24, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: STILL_EASE,
            delay: 0.25,
          }
        )
      }
    },
    { scope: sectionRef, revertOnUpdate: false }
  )

  return (
    <section
      ref={sectionRef}
      className="px-[clamp(1.5rem,5vw,2rem)] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-2 md:gap-12">
        <div data-hero-copy>
          <h1
            data-hero-item
            className="max-w-[18ch] text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.15] text-still-ink text-balance"
          >
            Quiet reading for the open web.
          </h1>
          <p
            data-hero-item
            className="mt-6 max-w-[45ch] text-lg leading-relaxed text-still-muted text-pretty"
          >
            Click once. Still removes ads, sidebars, and clutter—leaving the
            article on warm paper. Nothing leaves your browser.
          </p>

          <div data-hero-item>
            <HeroCtas
              align="start"
              onTryStill={() => demoRef.current?.openReader()}
            />
          </div>

          <p
            data-hero-item
            className="mt-8 text-sm font-medium text-still-stone"
          >
            One click. Just the article.
          </p>
        </div>

        <BrowserDemo ref={demoRef} />
      </div>
    </section>
  )
}
