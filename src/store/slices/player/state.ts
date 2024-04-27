import { DEFAULT_FPS } from "~/constants/remotion";
import { TPlayerHander } from "~/store/slices/player/types";
import { clampNumbers } from "~/utils/number/clamp-numbers";
import { isNull } from "~/utils/validation/is/null";

export const playerState: TPlayerHander =
  (...args) => {
    const [_, get] = args;
    return {
      playerElementRef: {
        current: null,
      },
      seekBySeconds: (
        seconds: number
      ) => {
        const state = get();
        if (
          !isNull(
            state.playerElementRef
              .current
          )
        ) {
          const min =
            (state.playerElementRef.current.getCurrentFrame() ??
              0) +
            state.fps * seconds;
          const max =
            state.durationInFrames;

          state.playerElementRef.current?.seekTo(
            clampNumbers({
              min,
              max,
            })
          );
        }
      },
      setCurrentFrame: (
        nextCurrentFrame
      ) => {
        const { playerElementRef } =
          get();
        if (!playerElementRef.current)
          return;
        playerElementRef.current.seekTo(
          nextCurrentFrame
        );
      },
    };
  };
