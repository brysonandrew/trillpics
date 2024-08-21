import { TemporalState } from "zundo";
// import { useStore } from "zustand";
// import { useTrillPicsStoreBase } from "~/store/middleware";
import { TTemporalPartializedState } from "~/store/middleware/5.temporal/types";

export const useTemporalStore = <T>(
  selector: (
    state: TemporalState<TTemporalPartializedState>
  ) => T
) => null;
// useStore(
//   useTrillPicsStoreBase.temporal,
//   selector
// );
