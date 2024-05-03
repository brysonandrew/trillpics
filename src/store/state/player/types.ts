import { PlayerMethods } from "@remotion/player";
import { PlayerEmitter } from "@remotion/player/dist/cjs/event-emitter";

export type TPlayerInstance =
  | (PlayerMethods &
      Omit<
        PlayerEmitter,
        "dispatchEvent"
      >)
  | null;

export type TPlayerSeekFramesState = {
  seekFrames: (frames: number) => void;
};

export type TPlayerSeekSecondsState = {
  seekSeconds: (
    seconds: number
  ) => void;
};

export type TPlayerState =
  TPlayerSeekFramesState &
    TPlayerSeekSecondsState & {
      playerInstance: TPlayerInstance;
    };
