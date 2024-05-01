import { TCoreControlsState } from "~/store/state/core/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";

export const coreControlsState: TStateHandler<
  TCoreControlsState
> = (set, get): TCoreControlsState => ({
  isControls: true,
  toggleControls: (next?: boolean) => {
    set((prev: TState) => ({
      isControls:
        next ?? !prev.isControls,
    }));
  },
});
