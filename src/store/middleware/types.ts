import { StoreApi } from "zustand";
import { TPersistPartializedState } from "~/store/middleware/3.persist/types";
import { TTemporalState } from "~/store/middleware/5.temporal/types";

export type TMiddlewares = [
  [
    "temporal",
    StoreApi<TTemporalState>
  ],
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
];
