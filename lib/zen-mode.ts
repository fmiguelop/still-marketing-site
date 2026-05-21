import { readFileSync } from 'node:fs'
import path from 'node:path'

const PRIVACY_RELATIVE = 'content/synced/privacy.md'

export function getPrivacyMarkdownPath(): string {
  return path.join(process.cwd(), PRIVACY_RELATIVE)
}

export function readPrivacyMarkdown(): string {
  const filePath = getPrivacyMarkdownPath()
  let content = readFileSync(filePath, 'utf8')
  content = content.replace(
    /\*\*<hello@fmiguelop\.dev>\*\*/g,
    '**[hello@fmiguelop.dev](mailto:hello@fmiguelop.dev)**',
  )
  content = content.replace(
    /Replace the placeholder above before publishing to the Chrome Web Store\.\n?/g,
    '',
  )
  return content
}
