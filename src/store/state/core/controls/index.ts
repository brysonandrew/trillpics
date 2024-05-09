import { TCoreControlsState } from "~/store/state/core/types";
import { TStateHandler } from "~/store/types";

export const coreControlsState: TStateHandler<
  TCoreControlsState
> = (set) => ({
  isControls: true,
  toggleControls: (next?: boolean) => {
    set({
      isControls: next,
    });
  },
});
