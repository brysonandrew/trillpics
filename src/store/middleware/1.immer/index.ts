import { enableMapSet } from "immer";
import { immer } from "zustand/middleware/immer";
import { TState } from "~/store/types";

enableMapSet();

export type TImmerState = typeof immer<
  TState,
  [
    [
      "zustand/subscribeWithSelector",
      never
    ]
  ],
  []
>;
export type TImmerStateResult =
  ReturnType<TImmerState>;

export const middlewareImmer: TImmerState = immer;
// <
//   TState,
//   [
//     [
//       "zustand/subscribeWithSelector",
//       never
//     ]
//   ],
//   []
// >;
