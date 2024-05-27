import {
  TPics,
  TPicsState,
} from "~/store/state/pics/types";
import { shuffle } from "~/utils/array/shuffle";
import { TStateHandler } from "~/store/types";
import precachePics from "~app/precache.json";
const { length: picsCount } =
  precachePics;
const INIT_PICS = [
  ...Array(picsCount),
].map((_, index) => `${index + 1}`);
const shuffledPics = shuffle(INIT_PICS);

export const picsState: TStateHandler<
  TPicsState
> = (set, get): TPicsState => ({
  picsCount,
  pics: shuffledPics,
  updatePics: (config) => {
    const prev = get().pics;
    const nextPics: TPics =
      config?.pics ??
      shuffle([...prev]);
    set({
      pics: nextPics,
    });
    get().table.update.cells({
      ...config,
      cells: nextPics,
    });
  },
});
