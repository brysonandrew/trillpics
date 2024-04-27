import { TDirectorAddState } from "~/store/slices/director/types";
import { TPics } from "~/store/slices/pics/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";

export const directorAddState: TStateHandler<
  TDirectorAddState
> = (set, get): TDirectorAddState => ({
  addVideoPic: (next: string) => {
    get().addVideoPics([next]);
  },
  addVideoPics: (nextPics: TPics) =>
    set((prev: TState) => {
      const videoPics = [
        ...new Set([
          ...prev.videoPics,
          ...nextPics,
        ]),
      ];
      const durationInFrames =
        videoPics.length * get().fps;
      return {
        videoPics,
        durationInFrames,
      };
    }),
});
