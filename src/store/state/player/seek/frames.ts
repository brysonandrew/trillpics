import { TPlayerSeekFramesState } from "~/store/state/player/types";
import { TStateHandler } from "~/store/types";
import { isNull } from "~/utils/validation/is/null";

export const playerSeekFramesState: TStateHandler<
  TPlayerSeekFramesState
> = (...args) => {
  const [_, get] = args;
  return {
    seekFrames: (nextFrame: number) => {
      const { playerInstance } = get();
      if (isNull(playerInstance)) return;
      playerInstance.seekTo(nextFrame);
    },
  };
};
