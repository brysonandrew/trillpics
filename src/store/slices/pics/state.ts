import { TPicsState } from "~/store/slices/pics/types";
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
  updatePicsEntries: (
    next?: string[]
  ) => {
    const currPics = get().pics();
    set({
      picsEntries: [
        ...get().picsEntries,
        next ?? shuffle([...currPics]),
      ],
    });
  },
});
