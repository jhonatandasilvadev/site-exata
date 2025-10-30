export function publicPath(path) {
  if (!path) return '';
  const normalized = String(path).replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}


