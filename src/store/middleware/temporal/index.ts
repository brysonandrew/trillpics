import { ZundoOptions } from "zundo";
import { TState } from "~/store/types";
import { TTemporalPartializedState } from "~/store/middleware/temporal/types";
import { persist } from "zustand/middleware";
import { debounce } from "~/utils/debounce";

const equality = (
  prev: TTemporalPartializedState,
  curr: TTemporalPartializedState
) => {
  const isVideoPicsCountEqual =
    prev.videoPics.length ===
    curr.videoPics.length;
  return isVideoPicsCountEqual;
};

export const OPTIONS_UNDO_REDO: ZundoOptions<
  TState,
  TTemporalPartializedState
> = {
  wrapTemporal: (storeInitializer) =>
    persist(storeInitializer, {
      name: "temporal-persist",
    }),
  limit: 100,
  equality,
  partialize: (state: TState) =>
    ({
      videoPics: state.videoPics,
    } as TState),
  handleSet: (handleSet) =>
    debounce((state) => {
      handleSet(state);
    }, 600),
};
