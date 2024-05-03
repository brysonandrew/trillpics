import { subscribeWithSelector } from "zustand/middleware";
import { TState } from "~/store/types";

export type TSubscribeState =
  typeof subscribeWithSelector<
    TState,
    [["zustand/persist", unknown]],
    [["zustand/immer", never]]
  >;
export type TSubscribeStateResult =
  ReturnType<TSubscribeState>;
export const middlewareSubscribeWithSelector: TSubscribeState =
  subscribeWithSelector;

// <
//   TState,
//   [["zustand/persist", unknown]],
//   [["zustand/immer", never]]
// >;
