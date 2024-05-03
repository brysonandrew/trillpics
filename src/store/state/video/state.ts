import { DEFAULT_FPS } from "~/constants/remotion";
import { videoAddState } from "~/store/state/video/add";
import { videoRemoveState } from "~/store/state/video/remove";
import { TStateCreatorParameters } from "~/store/types";

export const videoState = (...args: TStateCreatorParameters) => {
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
    ...videoAddState(...args),
    ...videoRemoveState(...args),
  };
};
