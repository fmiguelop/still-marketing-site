import { BrowserFrameStatic } from '@/components/browser-demo/browser-frame-static'
import { ReaderPanel } from '@/components/browser-demo/reader-panel'
import { CaptureFrame } from '@/components/store-capture/capture-frame'

export function ReaderFocusShot() {
  return (
    <CaptureFrame caption="Warm paper. Comfortable type.">
      <div className="flex h-full items-center justify-center px-[90px]">
        <BrowserFrameStatic
          className="h-[700px] w-[1100px] rounded-xl"
          interactive={false}
          isReaderOpen
        >
          <ReaderPanel
            onClose={() => {}}
            theme="light"
            initialProgress={0.15}
            interactive={false}
          />
        </BrowserFrameStatic>
      </div>
    </CaptureFrame>
  )
}
