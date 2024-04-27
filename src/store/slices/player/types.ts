import { MutableRefObject } from "react";
import { PlayerRef } from "@remotion/player";
import {
  TStateWithPlayerState,
  TStateCreator,
} from "~/store/types";
import { StateCreator } from "zustand";

export type TPlayerKey =
  | string
  | number;
export type TPlayerElement = PlayerRef;
export type TPlayerElementRef =
  MutableRefObject<TPlayerElement | null>;

export type TPlayerState = {
  playerElementRef: TPlayerElementRef;
  seekBySeconds: (
    seconds: number
  ) => void;
  setCurrentFrame: (
    nextCurrentFrame: number
  ) => void;
};

export type TPlayerStateCreator =
  TStateCreator<TPlayerState>;
export type TPlayerHander = (
  ...args: Parameters<
    StateCreator<TStateWithPlayerState>
  >
) => TPlayerState;
