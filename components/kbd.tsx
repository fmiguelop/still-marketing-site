import type { ReactNode } from 'react'

type KbdProps = {
  children: ReactNode
}

export function Kbd({ children }: KbdProps) {
  return (
    <kbd className="inline-flex items-center rounded-md border border-still-border bg-still-paper-elevated px-2 py-0.5 font-sans text-sm font-medium text-still-ink shadow-[0_1px_0_rgba(26,26,24,0.06)]">
      {children}
    </kbd>
  )
}
