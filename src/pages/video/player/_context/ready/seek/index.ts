import { TPlayerInstanceReady } from "~/pages/video/player/_context/ready/types";
import { clampNumbers } from "~/utils/number/clamp-numbers";
import { isNull } from "~/utils/validation/is/null";


export type TPlayerSeekHandlers = {
  seconds(value: number): void;
  frames(value: number): void;
};
export type TPlayerSeek = (
  playerInstance: TPlayerInstanceReady,
  fps: number
) => TPlayerSeekHandlers
export const playerSeekHandlers: TPlayerSeek =
  (
    playerInstance: TPlayerInstanceReady,
    fps: number
  ) => {
    return {
      seconds: (value: number) => {
        if (isNull(playerInstance))
          return;
        const min = fps * value;
        const max =
          fps * value * Infinity;
        const nextFrame = clampNumbers({
          min,
          max,
        });
        playerInstance.seekTo(
          nextFrame
        );
      },
      frames: (value: number) => {
        playerInstance.seekTo(value);
      },
    };
  };
