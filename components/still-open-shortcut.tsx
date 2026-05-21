'use client'

import { useSyncExternalStore } from 'react'
import { Kbd } from '@/components/kbd'
import { isApplePlatform } from '@/lib/platform'

function subscribe() {
  return () => {}
}

function getSnapshot() {
  return isApplePlatform()
}

function getServerSnapshot() {
  return false
}

function ShortcutChord({ isMac }: { isMac: boolean }) {
  const modifier = isMac ? '⌥' : 'Alt'

  return (
    <span className="inline-flex items-center gap-1">
      <Kbd>{modifier}</Kbd>
      <span aria-hidden="true">+</span>
      <Kbd>Shift</Kbd>
      <span aria-hidden="true">+</span>
      <Kbd>S</Kbd>
    </span>
  )
}

export function StillOpenShortcut() {
  const isMac = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  return (
    <span aria-label={`${isMac ? 'Option' : 'Alt'} Shift S`}>
      <ShortcutChord isMac={isMac} />
    </span>
  )
}
