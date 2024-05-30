import { PropsWithChildren } from "react";
import {
  TPlayerInstance,
  TPlayerInstanceReady,
} from "~/pages/video/player/_context/ready/types";

export type TPlayerInitProps = {
  playerInstance: TPlayerInstance;
};
export type TInitVideoState = {
  fps: number;
};
export type TPlayerInitContextProviderProps =
  {
    children(
      initState: TPlayerInstance
    ): JSX.Element;
  };

export type TPartialInitVideoState =
  Partial<TInitVideoState>;

export type TPlayerInitContext =
TPlayerInitProps & 
    TInitVideoState & {
      updatePlayerInstance(
        playerInstance: TPlayerInstanceReady
      ): void;
      updateState(
        partial: TPartialInitVideoState
      ): void;
    };
