import { TPlayerSeekFramesState } from "~/store/slices/player/types";
import { TStateWithPlayerStateHandler } from "~/store/types";

export const playerSeekFramesState: TStateWithPlayerStateHandler<
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
