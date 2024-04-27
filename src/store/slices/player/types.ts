import { PlayerRef } from "@remotion/player";

export type TPlayerKey =
  | string
  | number;
export type TPlayerInstance =
  PlayerRef | null;

export type TPlayerSeekFramesState = {
  seekFrames: (
    nextCurrentFrame: number
  ) => void;
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
