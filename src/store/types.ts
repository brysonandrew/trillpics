import { StateCreator } from "zustand";
import { THoverState } from "~/store/slices/hover/types";
import { TPlayerState } from "~/store/slices/player/types";
import { TCoreState } from "~/store/slices/core/types";
import { TPicsState } from "~/store/slices/pics/types";
import { TDirectorState } from "~/store/slices/director/types";
import { TUpdaterState } from "~/store/slices/updater/types";
import { TTableState } from "~/store/slices/table/types";
import { TScrollState } from "~/store/slices/scroll/types";

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
  TScrollState &
  TTableState &
  TPicsState &
  TDirectorState &
  THoverState &
  TUpdaterState &
  TPlayerState;

export type TStateKey = keyof TState;
