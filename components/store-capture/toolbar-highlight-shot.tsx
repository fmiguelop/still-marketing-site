import { BrowserFrameStatic } from '@/components/browser-demo/browser-frame-static'
import { ClutteredPage } from '@/components/browser-demo/cluttered-page'
import { CaptureFrame } from '@/components/store-capture/capture-frame'

export function ToolbarHighlightShot() {
  return (
    <CaptureFrame caption="Works on any article page.">
      <div className="flex h-full flex-col px-6 pt-6">
        <p className="mb-4 text-lg text-still-ink">
          Click the Still icon in your toolbar
        </p>
        <BrowserFrameStatic
          className="min-h-0 flex-1 rounded-xl"
          interactive={false}
          isReaderOpen={false}
          highlightIcon
        >
          <ClutteredPage showSidebars />
        </BrowserFrameStatic>
      </div>
    </CaptureFrame>
  )
}
