import { ZundoOptions } from "zundo";
import { TState } from "~/store/types";
import { persist } from "zustand/middleware";
import { debounce } from "~/utils/debounce";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TTemporalPartializedState } from "~/store/middleware/5.temporal/types";
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
  const isFpsSame =
    prev.fps === curr.fps;
  const isPicsSame =
    prev.pics.toString() ===
    curr.pics.toString();
  return isFpsSame && isPicsSame;
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
  partialize: (state: TState) => ({
    fps: state.fps,
    pics: state.pics,
  }),
  handleSet: (handleSet) =>
    debounce((state) => {
      handleSet(state);
    }, 600),
};
