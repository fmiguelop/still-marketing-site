#!/usr/bin/env sh
set -eu

resolve_vendor_root() {
  if [ -f "vendor/zen-mode/docs/PRIVACY.md" ]; then
    printf '%s' "vendor/zen-mode"
    return 0
  fi

  if [ -n "${STILL_ZEN_MODE_PATH:-}" ] && [ -f "${STILL_ZEN_MODE_PATH}/docs/PRIVACY.md" ]; then
    printf '%s' "${STILL_ZEN_MODE_PATH}"
    return 0
  fi

  if [ -f "../zen-mode/docs/PRIVACY.md" ]; then
    printf '%s' "../zen-mode"
    return 0
  fi

  return 1
}

VENDOR_ROOT=""
if VENDOR_ROOT="$(resolve_vendor_root)"; then
  :
else
  echo "error: could not find zen-mode docs (PRIVACY.md)." >&2
  echo "" >&2
  echo "Initialize the zen-mode submodule:" >&2
  echo "  git submodule update --init --recursive" >&2
  echo "" >&2
  echo "Or set STILL_ZEN_MODE_PATH to your local zen-mode clone:" >&2
  echo "  STILL_ZEN_MODE_PATH=/path/to/zen-mode pnpm build" >&2
  exit 1
fi

mkdir -p content/synced

for doc in PRIVACY CHANGELOG; do
  SRC="${VENDOR_ROOT}/docs/${doc}.md"
  DEST="content/synced/$(echo "$doc" | tr '[:upper:]' '[:lower:]').md"

  if [ ! -f "$SRC" ]; then
    echo "error: missing $SRC" >&2
    exit 1
  fi

  cp "$SRC" "$DEST"
  echo "Synced ${doc} from $SRC"
done
