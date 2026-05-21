#!/usr/bin/env sh
set -eu

DEST="content/synced/privacy.md"
SRC=""

if [ -f "vendor/zen-mode/docs/PRIVACY.md" ]; then
  SRC="vendor/zen-mode/docs/PRIVACY.md"
elif [ -n "${STILL_ZEN_MODE_PATH:-}" ] && [ -f "${STILL_ZEN_MODE_PATH}/docs/PRIVACY.md" ]; then
  SRC="${STILL_ZEN_MODE_PATH}/docs/PRIVACY.md"
fi

if [ -z "$SRC" ]; then
  echo "error: could not find docs/PRIVACY.md." >&2
  echo "" >&2
  echo "Initialize the zen-mode submodule:" >&2
  echo "  git submodule update --init --recursive" >&2
  echo "" >&2
  echo "Or set STILL_ZEN_MODE_PATH to your local zen-mode clone:" >&2
  echo "  STILL_ZEN_MODE_PATH=/path/to/zen-mode pnpm build" >&2
  exit 1
fi

mkdir -p content/synced
cp "$SRC" "$DEST"
echo "Synced privacy policy from $SRC"
