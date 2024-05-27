import { DEFAULT_FPS } from "~/constants/remotion";

export const videoState = () => {
  return {
    isStarted: false,
    isMuted: false,
    isPlaying: false,
    fps: DEFAULT_FPS,
  };
};
