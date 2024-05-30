import { PropsWithChildren } from "react";
import { PlayerMethods } from "@remotion/player";
import { PlayerEmitter } from "@remotion/player/dist/cjs/event-emitter";
import { TPlayerSeekHandlers } from "~/pages/video/player/_context/ready/seek";

export type TPlayerReadyProps = {
  playerInstance: TPlayerInstanceReady;
};
export type TPlayerReadyContextProviderProps =
  PropsWithChildren<TPlayerReadyProps>;

export type TVideoState = {
  isMuted: boolean;
  isStarted: boolean;
  isPlaying: boolean;
};
export type TPartialVideoState =
  Partial<TVideoState>;
export type TUpdateReadyStateHandler = (
  partial: TPartialVideoState
) => void;
export type TPlayerReadyContext =
  TPlayerReadyProps &
    TVideoState & {
      seek: TPlayerSeekHandlers;
      updateState: TUpdateReadyStateHandler;
    };

export type TPlayerInstanceReady =
  PlayerMethods &
    Omit<
      PlayerEmitter,
      "dispatchEvent"
    >;
export type TPlayerInstance =
  TPlayerInstanceReady | null;

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
