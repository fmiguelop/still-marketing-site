import type { ReactNode } from 'react'

type KbdProps = {
  children: ReactNode
}

export function Kbd({ children }: KbdProps) {
  return (
    <kbd className="rounded border border-still-border bg-still-paper px-1.5 py-0.5 font-sans text-sm text-still-ink">
      {children}
    </kbd>
  )
}
