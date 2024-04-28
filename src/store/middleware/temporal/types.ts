import { TemporalState } from "zundo";
import { StoreApi } from "zustand";
import { TDirectorState } from "~/store/slices/director/types";

export type TTemporalPartializedState =
  Pick<TDirectorState, "videoPics">;

export type TTemporalState =
  TemporalState<TTemporalPartializedState>;

export type TTemporalMiddleware = [
  "temporal",
  StoreApi<TTemporalState>
];
