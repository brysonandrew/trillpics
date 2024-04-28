import {
  TPics,
  TPicsState,
} from "~/store/slices/pics/types";
import { shuffle } from "~/utils/array/shuffle";
import { TStateHandler } from "~/store/types";
import precachePics from "~app/precache.json";
const { length: picsCount } =
  precachePics;
const inits = [...Array(picsCount)].map(
  (_, index) => `${++index}`
);
const shuffledInits = shuffle(inits);

export const picsState: TStateHandler<
  TPicsState
> = (set, get): TPicsState => ({
  picsCount,
  picsEntries: [shuffledInits],
  countPicsEntries: () =>
    get().picsEntries.length,
  pics: (from = 0) =>
    get().picsEntries[
      get().countPicsEntries() - ++from
    ],
  countPics: () => get().pics().length,
  updatePicsEntries: (config) => {
    const prev = get().pics();
    const nextPics: TPics =
      config?.cells ??
      shuffle([...prev]);
    console.log(prev, config);
    set({
      picsEntries: [
        ...get().picsEntries,
        nextPics,
      ],
    });
    get().table.update.cells({
      ...config,
      cells: nextPics,
    });
  },
});
