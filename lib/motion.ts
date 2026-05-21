import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function initGsap() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const STILL_EASE = 'power2.out'

export function revealOnScroll(
  element: Element | null,
  options?: { y?: number; duration?: number; start?: string }
) {
  if (!element || prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 })
    return undefined
  }

  return gsap.from(element, {
    y: options?.y ?? 20,
    opacity: 0,
    duration: options?.duration ?? 0.65,
    ease: STILL_EASE,
    scrollTrigger: {
      trigger: element,
      start: options?.start ?? 'top 88%',
      once: true,
    },
  })
}
