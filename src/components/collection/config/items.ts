import { shuffle } from "@utils/array/shuffle";

const MAX_W = 500;
const MAX_SUFFIX =
  `-${MAX_W}w` as const;

export const resolveName = (
  path: string
) =>
  path.replace(
    new RegExp(
      `(.*pics\/|${MAX_SUFFIX}|.*pics\/.png|.png|.avif)`,
      "gi"
    ),
    ""
  );

export const PICS_COUNT = 800;
const INIT: number[] = [
  ...Array(PICS_COUNT),
].map((_, index) => index + 1);
export const PICS = shuffle(INIT);
// export const INITS: TPic[] =
//   ENTRIES.map(([path, resolver]) => ({
//     name: resolveName(path),
//     path,
//     resolver,
//   }));
