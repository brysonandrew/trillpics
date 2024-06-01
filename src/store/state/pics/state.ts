import {
  TPics,
  TPicsState,
} from "~/store/state/pics/types";
import { shuffle } from "~/utils/array/shuffle";
import { TStateHandler } from "~/store/types";

const pics= [];
const picsCount = pics.length
export const picsState: TStateHandler<
  TPicsState
> = (set, get): TPicsState => ({
  picsCount,
  pics: [],
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
