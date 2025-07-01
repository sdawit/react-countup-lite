export function defaultFormat(
  value: number,
  decimals = 0,
  suffix = ''
): string {
  const parts = value.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.') + suffix;
}

export function getSuffix(value: number, suffix?: string): [number, string] {
  if (suffix) return [value, suffix];
  if (Math.abs(value) >= 1_000_000) return [value / 1_000_000, 'M'];
  if (Math.abs(value) >= 1_000) return [value / 1_000, 'k'];
  return [value, ''];
}
