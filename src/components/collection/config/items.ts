import { shuffle } from "@utils/array/shuffle";
import precache from "@app/precache.json";

export const resolveSrc = (
  name: string | number,
  ext  = 'avif'
) =>
`video/pics/${name}.${ext}`

// export const PICS_COUNT = precache.length;
// const INIT: string[] = [
//   ...Array(PICS_COUNT),
// ].map((_, index) => resolveSrc(`${index + 1}`));
// export const PICS = shuffle(INIT);
