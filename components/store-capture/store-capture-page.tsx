'use client'

import { ReaderFocusShot } from '@/components/store-capture/reader-focus-shot'
import { SplitBeforeAfter } from '@/components/store-capture/split-before-after'
import { ToolbarHighlightShot } from '@/components/store-capture/toolbar-highlight-shot'

export function StoreCapturePage() {
  return (
    <main className="min-h-screen bg-still-paper-elevated px-8 py-10">
      <p className="mb-8 text-sm text-still-muted">
        Screenshot each frame at 1280×800 · /store-capture
      </p>

      <div className="flex flex-col gap-12">
        <SplitBeforeAfter />
        <ReaderFocusShot />
        <ToolbarHighlightShot />
      </div>
    </main>
  )
}
