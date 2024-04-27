import { ZundoOptions } from "zundo";
import { TStateWithPlayerState } from "~/store/types";
import { TDirectorState } from "~/store/slices/director/types";
import { persist } from "zustand/middleware";
import { debounce } from "~/utils/debounce";

export type TPartialZundoState = Pick<
  TDirectorState,
  "videoPics"
>;

const equality = (
  prev: TPartialZundoState,
  curr: TPartialZundoState
) => {
  const isVideoPicsCountEqual =
    prev.videoPics.length ===
    curr.videoPics.length;
  return isVideoPicsCountEqual;
};

export const OPTIONS_UNDO_REDO: ZundoOptions<
  TStateWithPlayerState,
  TStateWithPlayerState
> = {
  wrapTemporal: (storeInitializer) =>
    persist(storeInitializer, {
      name: "temporal-persist",
    }),
  limit: 100,
  equality,
  partialize: (
    state: TStateWithPlayerState
  ) =>
    ({
      videoPics: state.videoPics,
    } as TStateWithPlayerState),
  handleSet: (handleSet) =>
    debounce((state) => {
      handleSet(state);
    }, 600),
};
