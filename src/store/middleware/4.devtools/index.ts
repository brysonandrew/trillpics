import { devtools } from "zustand/middleware";
import { TState } from "~/store/types";
import { TPersistPartializedState } from "~/store/middleware/3.persist/types";

export type TDevtoolsState =
  typeof devtools<
    TState,
    [["temporal", unknown]],
    [
      [
        "zustand/persist",
        TPersistPartializedState
      ],
      [
        "zustand/subscribeWithSelector",
        never
      ],
      ["zustand/immer", never]
    ]
  >;
export type TDevtoolsStateResult =
  ReturnType<TDevtoolsState>;
export const middlewareDevtools: TDevtoolsState = devtools;
// <
//   TState,
//   [["temporal", unknown]],
//   [
//     [
//       "zustand/persist",
//       TPersistPartializedState
//     ],
//     [
//       "zustand/subscribeWithSelector",
//       never
//     ],
//     ["zustand/immer", never]
//   ]
// >;
