import { temporal } from "zundo";
import { TState } from "~/store/types";
import { TPersistPartializedState } from "~/store/middleware/3.persist/types";
import { TTemporalPartializedState } from "~/store/middleware/5.temporal/types";

export type TTemporalState =
  typeof temporal<
    TState,
    [],
    [
      ["zustand/devtools", never],
      [
        "zustand/persist",
        TPersistPartializedState
      ],
      [
        "zustand/subscribeWithSelector",
        never
      ],
      ["zustand/immer", never]
    ],
    TTemporalPartializedState
  >;
export type TTemporalStateResult =
  ReturnType<TTemporalState>;
export const middlewareTemporal: TTemporalState = temporal;
// <
//   TState,
//   [],
//   [
//     ["zustand/devtools", never],
//     [
//       "zustand/persist",
//       TPersistPartializedState
//     ],
//     [
//       "zustand/subscribeWithSelector",
//       never
//     ],
//     ["zustand/immer", never]
//   ],
//   TTemporalPartializedState
// >;
