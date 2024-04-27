import { StateCreator } from "zustand";
import { THoverState } from "~/store/slices/hover/types";
import { TPlayerState } from "~/store/slices/player/types";
import { TCoreState } from "~/store/slices/core/types";
import { TPicsState } from "~/store/slices/pics/types";
import { TDirectorState } from "~/store/slices/director/types";
import { TUpdaterState } from "~/store/slices/updater/types";
import { TUpdaterPlayerState } from "~/store/slices/updater/types/player";

export type TStateCreator<
  T extends object
> = StateCreator<TState, [], [], T>;

export type TPartialState =
  Partial<TState>;

export type TStateCreatorParameters =
  Parameters<TStateCreator<TState>>;
export type TStateHandler<
  T extends object
> = (
  ...args: TStateCreatorParameters
) => T;

export type TState = TCoreState &
  TPicsState &
  TDirectorState &
  THoverState &
  TUpdaterState;

export type TStateKey = keyof TState;
export type TStateWithPlayerState =
  TState &
    TPlayerState &
    TUpdaterPlayerState;

export type TPartialStateWithPlayerState =
  Partial<TStateWithPlayerState>;
export type TStateWithPlayerStateKey =
  keyof TStateWithPlayerState;

export type TStateWithPlayerStateCreator =
  StateCreator<
    TStateWithPlayerState,
    [],
    [],
    TPlayerState
  >;
export type TStateWithPlayerStateCreatorParameters =
  Parameters<TStateWithPlayerStateCreator>;
export type TStateWithPlayerStateHandler<
  T extends object
> = (
  ...args: TStateWithPlayerStateCreatorParameters
) => T;
