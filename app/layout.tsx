import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { siteName, siteUrl } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const title = 'Still — Quiet reading for the open web'
const description =
  'Still is a Chrome reader mode extension: one click strips articles to distraction-free text on warm paper. Local extraction—no account, no tracking.'

const ogImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Still — Quiet reading for the open web, Chrome reader mode extension',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: siteName }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/',
    siteName,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/icon/16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon/48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon/128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
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
