import type { Metadata } from 'next'
import { StoreCapturePage } from '@/components/store-capture/store-capture-page'

export const metadata: Metadata = {
  title: 'Store capture — Still',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <StoreCapturePage />
}
