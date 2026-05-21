import type { ReactNode } from 'react'

type CaptureFrameProps = {
  children: ReactNode
  caption?: string
  className?: string
}

export function CaptureFrame({ children, caption, className = '' }: CaptureFrameProps) {
  return (
    <div
      className={`relative flex h-[800px] w-[1280px] flex-col overflow-hidden bg-still-paper ${className}`}
    >
      <div className="min-h-0 flex-1">{children}</div>
      {caption && (
        <div className="flex h-12 flex-shrink-0 items-center border-t border-still-border px-8">
          <p className="text-lg font-semibold text-still-ink">{caption}</p>
        </div>
      )}
    </div>
  )
}
