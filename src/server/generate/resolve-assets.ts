import { localCheck } from "~/server/generate/is-local";

export const resolveAssets = (
  path: string
) => {
  const isLocal = localCheck();
  return isLocal
    ? 
      `assets/remotion/${path}`
    : path;
};
