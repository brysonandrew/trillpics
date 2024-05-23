import { DEFAULT_FPS } from "~/constants/remotion";
import { TStateCreatorParameters } from "~/store/types";

export const videoState = (
  ...args: TStateCreatorParameters
) => {
  return {
    fps: DEFAULT_FPS,
    isPlaying: false,
  };
};
