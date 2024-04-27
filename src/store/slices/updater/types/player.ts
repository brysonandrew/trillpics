import { WritableDraft } from "immer/src/internal";
import {
  TPartialStateWithPlayerState,
  TStateWithPlayerState,
} from "~/store/types";

export type TStoreState =
  | TStateWithPlayerState
  | TPartialStateWithPlayerState;

type TStoreDraftUpdater = (
  state: WritableDraft<TStateWithPlayerState>
) => void;
// nextStateOrUpdater: TCombinedSlices | Partial<TCombinedSlices> | ((state: WritableDraft<TCombinedSlices>) => void), shouldReplace?: boolean | undefined

type TStoreUpdater = (
  state: TStateWithPlayerState
) => TStoreState;
export type TUpdaterPlayerState = {
  updatePlayerState(
    nextStateOrUpdater:
      | TStoreState
      | TStoreUpdater,
    replace?: boolean | undefined
  ): void;
};
// TStateWithPlayerState | Partial<TStateWithPlayerState> | ((state: TStateWithPlayerState) => TStateWithPlayerState | Partial

// | Partial<TStateWithPlayerState>)

//  | Partial<...>), replace?: boolean | undefined) => void
