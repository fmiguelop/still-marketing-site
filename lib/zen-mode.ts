import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const PRIVACY_RELATIVE = 'content/synced/privacy.md'
const PRIVACY_DOC = 'docs/PRIVACY.md'

function privacySourceCandidates(): string[] {
  const cwd = process.cwd()
  const candidates = [
    path.join(cwd, PRIVACY_RELATIVE),
    path.join(cwd, 'vendor/zen-mode', PRIVACY_DOC),
  ]

  const envPath = process.env.STILL_ZEN_MODE_PATH
  if (envPath) {
    candidates.push(path.join(envPath, PRIVACY_DOC))
  }

  // Common local layout: still-marketing-site and zen-mode as sibling repos
  candidates.push(path.join(cwd, '../zen-mode', PRIVACY_DOC))

  return candidates
}

export function resolvePrivacyMarkdownPath(): string {
  for (const candidate of privacySourceCandidates()) {
    if (existsSync(candidate)) {
      return candidate
    }
  }

  throw new Error(
    'Could not find docs/PRIVACY.md. Run `pnpm prebuild`, initialize the zen-mode submodule, or set STILL_ZEN_MODE_PATH.',
  )
}

/** @deprecated Use resolvePrivacyMarkdownPath — kept for sitemap mtime */
export function getPrivacyMarkdownPath(): string {
  return resolvePrivacyMarkdownPath()
}

function transformPrivacyMarkdown(content: string): string {
  content = content.replace(
    /\*\*(?:<)?hello@fmiguelop\.dev>?\*\*/g,
    '**[hello@fmiguelop.dev](mailto:hello@fmiguelop.dev)**',
  )
  content = content.replace(
    /Replace the placeholder above before publishing to the Chrome Web Store\.\n?/g,
    '',
  )
  return content
}

export function readPrivacyMarkdown(): string {
  const filePath = resolvePrivacyMarkdownPath()
  const content = readFileSync(filePath, 'utf8')
  return transformPrivacyMarkdown(content)
}
