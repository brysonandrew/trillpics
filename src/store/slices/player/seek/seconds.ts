import { TPlayerSeekSecondsState } from "~/store/slices/player/types";
import { TStateHandler } from "~/store/types";
import { clampNumbers } from "~/utils/number/clamp-numbers";
import { isNull } from "~/utils/validation/is/null";

export const playerSeekSecondsState: TStateHandler<
  TPlayerSeekSecondsState
> = (...args) => {
  const [_, get] = args;
  return {
    seekSeconds: (seconds: number) => {
      const state = get();
      if (
        !isNull(state.playerInstance)
      ) {
        const min =
          (state.playerInstance.getCurrentFrame() ??
            0) +
          state.fps * seconds;
        const max =
          state.durationInFrames;

        state.playerInstance?.seekTo(
          clampNumbers({
            min,
            max,
          })
        );
      }
    },
  };
};
