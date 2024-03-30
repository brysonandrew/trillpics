import { shuffle } from "@utils/array/shuffle";

export const resolveSrc = (
  name: string
) =>
`src/pages/gallery/context/entries/video/pics/${name}.avif`

export const PICS_COUNT = 800;
const INIT: string[] = [
  ...Array(PICS_COUNT),
].map((_, index) => resolveSrc(`${index + 1}`));
export const PICS = shuffle(INIT);
