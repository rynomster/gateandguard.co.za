/**
 * Prefixes a path with the site BASE_URL to support GitHub Pages project subpaths.
 */
export function path(p: string = ''): string {
  const base = import.meta.env.BASE_URL;
  const cleanPath = p.startsWith('/') ? p.slice(1) : p;
  return `${base}${cleanPath}`;
}
