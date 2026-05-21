import { faqItems } from '@/lib/faq'
import { siteName, siteUrl } from '@/lib/site'

const storeUrl = process.env.NEXT_PUBLIC_CHROME_STORE_URL

export function HomeStructuredData() {
  const softwareApplication: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/#software`,
    name: siteName,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    description:
      'Quiet reading for the open web. Strip articles to distraction-free text in one click with local extraction.',
    url: siteUrl,
  }

  if (storeUrl) {
    softwareApplication.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      url: storeUrl,
    }
  }

  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description:
          'Still is a Chrome reader mode extension: one click strips articles to distraction-free text. Local extraction—no account, no tracking.',
      },
      softwareApplication,
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
