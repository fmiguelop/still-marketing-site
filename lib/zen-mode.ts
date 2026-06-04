import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const SYNCED_DIR = 'content/synced'

type ZenModeDoc = 'privacy' | 'changelog'

const DOC_PATHS: Record<ZenModeDoc, { synced: string; source: string }> = {
  privacy: {
    synced: path.join(SYNCED_DIR, 'privacy.md'),
    source: 'docs/PRIVACY.md',
  },
  changelog: {
    synced: path.join(SYNCED_DIR, 'changelog.md'),
    source: 'docs/CHANGELOG.md',
  },
}

function sourceCandidates(doc: ZenModeDoc): string[] {
  const { synced, source } = DOC_PATHS[doc]
  const cwd = process.cwd()
  const candidates = [
    path.join(cwd, synced),
    path.join(cwd, 'vendor/zen-mode', source),
  ]

  const envPath = process.env.STILL_ZEN_MODE_PATH
  if (envPath) {
    candidates.push(path.join(envPath, source))
  }

  candidates.push(path.join(cwd, '../zen-mode', source))

  return candidates
}

function resolveMarkdownPath(doc: ZenModeDoc): string {
  for (const candidate of sourceCandidates(doc)) {
    if (existsSync(candidate)) {
      return candidate
    }
  }

  const label = DOC_PATHS[doc].source
  throw new Error(
    `Could not find ${label}. Run \`pnpm prebuild\`, initialize the zen-mode submodule, or set STILL_ZEN_MODE_PATH.`,
  )
}

export function resolvePrivacyMarkdownPath(): string {
  return resolveMarkdownPath('privacy')
}

export function resolveChangelogMarkdownPath(): string {
  return resolveMarkdownPath('changelog')
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

export function readChangelogMarkdown(): string {
  const filePath = resolveChangelogMarkdownPath()
  return readFileSync(filePath, 'utf8')
}
