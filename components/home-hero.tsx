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
      className="flex min-h-0 flex-1 flex-col justify-center px-[clamp(1.5rem,5vw,2rem)] py-8 md:py-10"
    >
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-16 xl:gap-20">
        <div data-hero-copy className="relative z-10 lg:pt-2">
          <h1
            data-hero-item
            className="max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.22] tracking-[-0.02em] text-still-ink text-balance"
          >
            Quiet reading for the open web.
          </h1>
          <p
            data-hero-item
            className="mt-7 max-w-[42ch] text-[1.0625rem] leading-[1.65] text-still-muted text-pretty md:mt-8 md:text-lg md:leading-[1.7]"
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
            className="mt-9 text-sm leading-normal font-medium text-still-stone md:mt-10"
          >
            One click. Just the article.
          </p>
        </div>

        <BrowserDemo
          ref={demoRef}
          className="min-w-0 w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 md:mx-0 md:w-full lg:justify-self-start lg:w-[125%] lg:max-w-none"
          frameClassName="w-full max-md:aspect-[9/16] max-md:min-h-[min(58dvh,34rem)] shadow-[0_16px_40px_-12px_rgba(26,26,24,0.14)] md:min-h-0 md:aspect-[16/11] lg:aspect-[4/3] xl:shadow-[0_24px_48px_-12px_rgba(26,26,24,0.12)]"
        />
      </div>
    </section>
  )
}
