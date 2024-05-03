import { TemporalState } from "zundo";
import { useStore } from "zustand";
import { useTrillPicsStoreBase } from "~/store";
import { TTemporalPartializedState } from "~/store/middleware/5.temporal/types";

export const useTemporalStore = <T>(
  selector: (
    state: TemporalState<TTemporalPartializedState>
  ) => T
) =>
  useStore(
    useTrillPicsStoreBase.temporal,
    selector
  );
