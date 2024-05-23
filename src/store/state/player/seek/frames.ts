import { TPlayerSeekFramesState } from "~/store/state/player/types";
import { TStateHandler } from "~/store/types";

export const playerSeekFramesState: TStateHandler<
  TPlayerSeekFramesState
> = (...args) => {
  const [_, get] = args;
  return {
    seekFrames: (nextFrame: number) => {
      const { playerInstance } = get();
      if (!playerInstance) return;
      playerInstance.seekTo(nextFrame);
    },
  };
};
