import { TPlayerInstanceReady } from "~/pages/video/player/_context/ready/types";

const SEEK_DELTA_SECONDS = 1;

export type TPlayerSeekHandlers = {
  seconds(value: number): void;
  frames(value: number): void;
  forward(): void;
  backward(): void;
};
export type TPlayerSeek = (
  playerInstance: TPlayerInstanceReady,
  fps: number
) => TPlayerSeekHandlers;
export const playerSeekHandlers: TPlayerSeek =
  (
    playerInstance: TPlayerInstanceReady,
    fps: number
  ) => {
    return {
      backward: () => {
        const curr =
          playerInstance.getCurrentFrame();
        playerInstance.seekTo(
          curr -
            fps * SEEK_DELTA_SECONDS
        );
      },
      forward: () => {
        const curr =
          playerInstance.getCurrentFrame();
        playerInstance.seekTo(
          curr +
            fps * SEEK_DELTA_SECONDS
        );
      },
      seconds: (value: number) => {
        const frames = fps * value;
        playerInstance.seekTo(frames);
      },
      frames: (value: number) => {
        playerInstance.seekTo(value);
      },
    };
  };
