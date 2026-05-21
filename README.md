# Still — Marketing site

Landing page for the [Still](https://github.com) Chrome extension. Design tokens and privacy policy sync from the extension repo via git submodule.

## Clone

```bash
git clone --recurse-submodules <this-repo-url>
cd still-marketing-site
```

If you already cloned without submodules:

```bash
git submodule update --init --recursive
```

Replace `REPLACE_WITH_YOUR_ZEN_MODE_GITHUB_URL` in `.gitmodules` with your zen-mode repository URL before pushing to GitHub.

## Development

Requires Node.js 18+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

The `prebuild` script copies `vendor/zen-mode/docs/PRIVACY.md` into `content/synced/privacy.md`. For local dev without a submodule, set `STILL_ZEN_MODE_PATH` to your zen-mode clone (see `.env.example`).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CHROME_STORE_URL` | When set, hero primary CTA links to the Chrome Web Store; demo becomes secondary. Leave unset pre-launch (demo primary, store “Coming soon”). |

## Deploy (Vercel)

1. Connect this repository to Vercel.
2. Ensure **submodules** are fetched: Install Command can be `git submodule update --init --recursive && pnpm install` (or enable submodule support in project settings).
3. Set `NEXT_PUBLIC_CHROME_STORE_URL` after the extension is listed.
4. Point the Chrome Web Store homepage URL to your deployed domain.

## Privacy policy

`/privacy` renders [`vendor/zen-mode/docs/PRIVACY.md`](vendor/zen-mode/docs/PRIVACY.md) at build time. Update privacy in the extension repo, then run `git submodule update --remote` in this repo and redeploy.

## Related repos

- **zen-mode** — Still browser extension (submodule at `vendor/zen-mode`)
