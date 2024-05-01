import { StateCreator } from "zustand";
import { THoverState } from "~/store/state/hover/types";
import { TPlayerState } from "~/store/state/player/types";
import { TCoreState } from "~/store/state/core/types";
import { TPicsState } from "~/store/state/pics/types";
import { TDirectorState } from "~/store/state/director/types";
import { TUpdaterState } from "~/store/state/updater/types";
import { TTableState } from "~/store/state/table/types";
import { TScrollState } from "~/store/state/scroll/types";

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
