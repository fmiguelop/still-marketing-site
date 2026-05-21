export function isApplePlatform(): boolean {
  if (typeof navigator === 'undefined') return false

  const platform =
    navigator.userAgentData?.platform ?? navigator.platform ?? ''

  return /Mac|iPhone|iPad|iPod/i.test(platform)
}
