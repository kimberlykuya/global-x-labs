export function getAssetPath(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath;
}

