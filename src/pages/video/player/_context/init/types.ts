import { TPlayerInstance } from "~/pages/video/player/_context/ready/types";

export type TPlayerInitState = {
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
  TPlayerInitState &
    TInitVideoState & {
      updatePlayerInstance(
        partial: TPlayerInstance
      ): void;
      updateState(
        partial: TPartialInitVideoState
      ): void;
    };
