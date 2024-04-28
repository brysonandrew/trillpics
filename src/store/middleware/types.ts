import { StateCreator, StoreMutatorIdentifier } from "zustand";
import { TPersistMiddleware } from "~/store/middleware/persist/types";
import { TTemporalMiddleware } from "~/store/middleware/temporal/types";
import { TState } from "~/store/types";

export type TImmerMiddleware = [
  "zustand/immer",
  never
];
export type TSubscribeMiddleware = [
  "zustand/subscribeWithSelector",
  never
];

export type TDevtoolsMiddleware = [
  "zustand/devtools",
  never
];

export type TMiddlewares = [
  TImmerMiddleware,
  TSubscribeMiddleware,
  TPersistMiddleware,
  TDevtoolsMiddleware,
  TTemporalMiddleware
]
type TMiddleware = TMiddlewares[number];
type TM = [StoreMutatorIdentifier, unknown]
export type TMiddlewareStateCreator<
  T extends (TM|TMiddleware),
  P extends TM[],
  C extends TM[]
> = StateCreator<
  TState,
  [...P, T],
  [T, ...C]
>;
