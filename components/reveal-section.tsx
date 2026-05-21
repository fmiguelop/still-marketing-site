'use client'

import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { initGsap, prefersReducedMotion, STILL_EASE } from '@/lib/motion'

type RevealSectionProps = {
  children: ReactNode
  className?: string
  id?: string
  stagger?: boolean
}

export function RevealSection({
  children,
  className,
  id,
  stagger = false,
}: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      initGsap()
      const section = sectionRef.current
      if (!section) return

      if (prefersReducedMotion()) {
        gsap.set(section, { opacity: 1, y: 0 })
        gsap.set(section.querySelectorAll('[data-reveal-item]'), {
          opacity: 1,
          y: 0,
        })
        return
      }

      if (stagger) {
        const items = section.querySelectorAll('[data-reveal-item]')
        gsap.from(items, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: STILL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        })
        return
      }

      gsap.from(section, {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: STILL_EASE,
        scrollTrigger: {
          trigger: section,
          start: 'top 88%',
          once: true,
        },
      })
    },
    { scope: sectionRef, revertOnUpdate: false }
  )

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  )
}
