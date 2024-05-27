import { localCheck } from "~/server/generate/is-local";

export const resolveAssets = (
  path: string
) => {
  const isLocal = localCheck();
  console.log(isLocal);
  console.log(process.env);
  return isLocal
    ? 
      `assets/remotion/${path}`
    : path;
};
