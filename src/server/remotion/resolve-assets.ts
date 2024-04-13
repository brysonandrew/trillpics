export const resolveAssets = (
  path: string
) => {
  console.log(process.env)
  return process.env.npm_lifecycle_event?.includes(
    "dev"
  )
    ? //process.env.NETLIFY_LOCAL
      `assets/${path}`
    : path;
};
