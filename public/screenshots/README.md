# Marketing site screenshots

These PNGs come from the zen-mode store-assets pipeline. Replace the dev placeholders with real captures before launch.

## Capture (zen-mode repo)

1. Open a public-domain article (e.g. [The Great Gatsby on Project Gutenberg](https://www.gutenberg.org/ebooks/64317)).
2. Save to `zen-mode/docs/store-assets/source/` at **1280×800**:
   - `before.png` — cluttered page before Still
   - `after.png` — same page in Still reader
   - `reader.png` — tight crop of reader UI
   - `toolbar.png` — article page with Still icon in toolbar
3. From zen-mode root: `./docs/store-assets/build.sh`
4. From this repo: `sh scripts/sync-screenshots.sh`

See `zen-mode/docs/store-assets/README.md` for capture tips.
