import { Kbd } from '@/components/kbd'
import { StillOpenShortcut } from '@/components/still-open-shortcut'

export function HowItWorksIntro() {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-still-muted">
      <p>
        On any article page, click Still in your toolbar—or press{' '}
        <StillOpenShortcut />.
      </p>
      <p>
        The article opens on warm paper with comfortable type and no clutter.
      </p>
      <p>
        Press <Kbd>Esc</Kbd>, click Exit Still, or use the shortcut again to
        return.
      </p>
      <p>While reading, use <Kbd>+</Kbd> and <Kbd>−</Kbd> to adjust text size.</p>
    </div>
  )
}
