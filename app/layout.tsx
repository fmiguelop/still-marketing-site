import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const description =
  'Strip articles to distraction-free text in one click. Local extraction, no account, no tracking.'

export const metadata: Metadata = {
  title: 'Still — Quiet reading for the open web',
  description,
  keywords: [
    'reader mode',
    'Chrome extension',
    'distraction-free reading',
    'article reader',
  ],
  authors: [{ name: 'Still' }],
  openGraph: {
    title: 'Still — Quiet reading for the open web',
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Still — Quiet reading for the open web',
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F5F0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
