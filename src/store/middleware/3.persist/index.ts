import { persist } from "zustand/middleware";
import { TState } from "~/store/types";
import { TPersistPartializedState } from "~/store/middleware/3.persist/types";

export type TPersistState =
  typeof persist<
    TState,
    [["zustand/devtools", never]],
    [
      [
        "zustand/subscribeWithSelector",
        never
      ],
      ["zustand/immer", never]
    ],
    TPersistPartializedState
  >;
export type TPersistStateResult =
  ReturnType<TPersistState>;
export const middlewarePersist: TPersistState =
  persist;

// <
//   TState,
//   [["zustand/devtools", never]],
//   [
//     [
//       "zustand/subscribeWithSelector",
//       never
//     ],
//     ["zustand/immer", never]
//   ],
//   TPersistPartializedState
// >;
