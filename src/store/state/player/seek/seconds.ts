import { TPlayerSeekSecondsState } from "~/store/state/player/types";
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
          state.fps * seconds;
        const max =
          state.fps *
          seconds *
          Infinity;

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
