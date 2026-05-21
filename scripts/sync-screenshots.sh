#!/usr/bin/env bash
# Sync store screenshots from zen-mode into public/screenshots/.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ZEN_MODE="${ZEN_MODE:-$ROOT/vendor/zen-mode}"

if [[ ! -d "$ZEN_MODE/docs/store-assets" ]]; then
  echo "zen-mode not found at $ZEN_MODE — set ZEN_MODE to the repo path." >&2
  exit 1
fi

if [[ ! -f "$ZEN_MODE/docs/store-assets/source/before.png" ]]; then
  echo "Missing source screenshots. Capture before.png in $ZEN_MODE/docs/store-assets/source/ first." >&2
  echo "See zen-mode/docs/store-assets/README.md" >&2
  exit 1
fi

(cd "$ZEN_MODE" && ./docs/store-assets/build.sh)

mkdir -p "$ROOT/public/screenshots"
cp "$ZEN_MODE/docs/store-assets/screenshot-01-hero.png" "$ROOT/public/screenshots/"
cp "$ZEN_MODE/docs/store-assets/screenshot-02-reader.png" "$ROOT/public/screenshots/"
cp "$ZEN_MODE/docs/store-assets/source/before.png" "$ROOT/public/screenshots/"

echo "Synced screenshots to public/screenshots/"
