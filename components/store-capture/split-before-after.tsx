import { BrowserFrameStatic } from '@/components/browser-demo/browser-frame-static'
import { ClutteredPage } from '@/components/browser-demo/cluttered-page'
import { ReaderPanel } from '@/components/browser-demo/reader-panel'
import { CaptureFrame } from '@/components/store-capture/capture-frame'

export function SplitBeforeAfter() {
  return (
    <CaptureFrame caption="One click. Just the article.">
      <div className="flex h-full">
        <div className="relative h-full w-[639px] flex-shrink-0 p-3 pb-0">
          <BrowserFrameStatic
            className="h-full rounded-lg"
            interactive={false}
            isReaderOpen={false}
          >
            <ClutteredPage showSidebars />
          </BrowserFrameStatic>
          <p className="absolute bottom-3 left-8 text-lg text-still-muted">Before</p>
        </div>

        <div className="w-[2px] flex-shrink-0 bg-still-border" aria-hidden />

        <div className="relative h-full w-[639px] flex-shrink-0 p-3 pb-0">
          <BrowserFrameStatic
            className="h-full rounded-lg"
            interactive={false}
            isReaderOpen
            glow
          >
            <ReaderPanel
              onClose={() => {}}
              theme="light"
              initialProgress={0.12}
              interactive={false}
            />
          </BrowserFrameStatic>
          <p className="absolute bottom-3 left-8 text-lg text-still-muted">After Still</p>
        </div>
      </div>
    </CaptureFrame>
  )
}
