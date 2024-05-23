import { THoverState } from "~/store/state/hover/types";
import { TPlayerState } from "~/store/state/player/types";
import { TCoreState } from "~/store/state/core/types";
import { TPicsState } from "~/store/state/pics/types";
import { TVideoState } from "~/store/state/video/types";
import {
  TSet,
  TSetState,
} from "~/store/state/set/types";
import { TTableState } from "~/store/state/table/types";
import { TScrollState } from "~/store/state/scroll/types";
import { TStateWithMiddleware } from "~/store/middleware";

export type TState = TCoreState &
  TScrollState &
  TTableState &
  TPicsState &
  TVideoState &
  THoverState &
  TPlayerState &
  TSetState;

export type TStateKey = keyof TState;

export type TPartialState =
  Partial<TState>;

export type TGet = () => TState;
type TStore =
  Parameters<TStateWithMiddleware>[2];

export type TStateCreatorParameters = [
  TSet,
  TGet,
  TStore
];

export type TStateHandler<
  T extends object
> = (
  ...args: TStateCreatorParameters
) => T;
