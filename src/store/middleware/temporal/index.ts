import { ZundoOptions } from "zundo";
import { TState } from "~/store/types";
import { TTemporalPartializedState } from "~/store/middleware/temporal/types";
import { persist } from "zustand/middleware";
import { debounce } from "~/utils/debounce";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import packageJson from "~root/package.json";
const version = packageJson.version;
const name = packageJson.name;
const temporalPersistKey =
  resolveCompositeKey(
    version,
    name,
    "temporal",
    "persist"
  );

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
      name: temporalPersistKey,
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
