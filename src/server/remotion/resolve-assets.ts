export const resolveAssets = (
  path: string
) =>
  process.env.NETLIFY_LOCAL
    ? `assets/${path}`
    : path;
