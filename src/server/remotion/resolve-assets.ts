import { isDev } from "@/server/remotion/is-dev";

export const resolveAssets = (
  path: string
) => {
  return isDev()
    ? //process.env.NETLIFY_LOCAL
      `assets/${path}`
    : path;
};
