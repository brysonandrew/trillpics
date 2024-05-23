import { TVideoAddState } from "~/store/state/video/types";
import { TPics } from "~/store/state/pics/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";

export const videoAddState: TStateHandler<
  TVideoAddState
> = (set, get): TVideoAddState => ({
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
