import { Kbd } from '@/components/kbd'
import { StillOpenShortcut } from '@/components/still-open-shortcut'

export function HowItWorksIntro() {
  return (
    <p className="text-lg leading-relaxed text-still-muted">
      On any article page, click Still in your toolbar—or press{' '}
      <StillOpenShortcut />. The article opens on warm paper with comfortable
      type and no clutter. Press <Kbd>Esc</Kbd>, click Exit Still, or use the
      shortcut again to return. While reading, use + and − to adjust text size.
    </p>
  )
}
