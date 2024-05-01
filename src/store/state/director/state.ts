import { DEFAULT_FPS } from "~/constants/remotion";
import { directorAddState } from "~/store/state/director/add";
import { directorRemoveState } from "~/store/state/director/remove";
import { TDirectorState } from "~/store/state/director/types";
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
