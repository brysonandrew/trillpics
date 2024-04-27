import { DEFAULT_FPS } from "~/constants/remotion";
import { directorAddState } from "~/store/slices/director/add";
import { directorRemoveState } from "~/store/slices/director/remove";
import { TDirectorState } from "~/store/slices/director/types";
import { TStateHandler } from "~/store/types";

export const directorState: TStateHandler<
  TDirectorState
> = (...args): TDirectorState => {
  const [_, get] = args;
  return {
    fps: DEFAULT_FPS,
    durationInFrames: 1,
    isPlaying: false,
    videoPics: [],
    countVideoPics: () =>
      get().videoPics.length,
    isVideoPics: () =>
      Boolean(get().countVideoPics()),
    ...directorAddState(...args),
    ...directorRemoveState(...args),
  };
};
