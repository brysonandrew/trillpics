import { WritableDraft } from "immer/src/internal";
import {  TState,  TPartialState,} from "~/store/types";

export type TStoreState =
  | TState
  | TPartialState;

type TStoreDraftUpdater = (
  state: WritableDraft<TState>
) => void;
// nextStateOrUpdater: TCombinedSlices | Partial<TCombinedSlices> | ((state: WritableDraft<TCombinedSlices>) => void), shouldReplace?: boolean | undefined

type TStoreUpdater = (
  state: TState
) => TStoreState;
export type TUpdaterState = {
  updateState(
    nextStateOrUpdater:
      | TStoreState
      | TStoreUpdater,
    replace?: boolean | undefined
  ): void;
};
// TState | Partial<TState> | ((state: TState) => TState | Partial



// | Partial<TState>)

//  | Partial<...>), replace?: boolean | undefined) => void