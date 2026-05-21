import type { CSSProperties, HTMLAttributes, ReactNode, RefObject } from 'react'
import { BrowserChrome } from '@/components/browser-demo/browser-chrome'

type BrowserFrameStaticProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  frameRef?: RefObject<HTMLDivElement | null>
  isReaderOpen?: boolean
  onToggleReader?: () => void
  iconRef?: RefObject<HTMLButtonElement | null>
  highlightIcon?: boolean
  interactive?: boolean
  glow?: boolean
} & Pick<HTMLAttributes<HTMLDivElement>, 'data-hero-shot'>

export function BrowserFrameStatic({
  children,
  className = '',
  style,
  frameRef,
  isReaderOpen = false,
  onToggleReader = () => {},
  iconRef,
  highlightIcon = false,
  interactive = true,
  glow = false,
  ...rest
}: BrowserFrameStaticProps) {
  return (
    <div
      ref={frameRef}
      style={style}
      {...rest}
      className={`flex flex-col overflow-hidden rounded-xl border border-still-border bg-still-paper-elevated shadow-[0_1px_2px_rgba(26,26,24,0.06)] ${
        glow
          ? 'ring-2 ring-still-sage/50 shadow-[0_0_0_4px_rgba(92,122,107,0.15),0_1px_2px_rgba(26,26,24,0.06)]'
          : ''
      } ${className}`}
    >
      <BrowserChrome
        isReaderOpen={isReaderOpen}
        onToggleReader={onToggleReader}
        iconRef={iconRef}
        highlightIcon={highlightIcon}
        interactive={interactive}
      />
      <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
