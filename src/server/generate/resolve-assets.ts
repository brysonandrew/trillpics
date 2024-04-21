import { isLocal } from "~/server/generate/is-local";

export const resolveAssets = (
  path: string
) => {
  const isLocalMode = isLocal();
  console.log(isLocalMode);
  console.log(process.env);
  return isLocalMode
    ? //process.env.NETLIFY_LOCAL
      `assets/${path}`
    : path;
};
