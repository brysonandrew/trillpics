import { TCoreControlsState } from "~/store/state/core/types";
import { TStateHandler } from "~/store/types";

export const coreControlsState: TStateHandler<
  TCoreControlsState
> = (set) => ({
  isControls: true,
  toggleControls: (next?: boolean) => {
    set(
      (prev: {
        isControls: boolean;
      }) => ({
        isControls:
          next ?? !prev.isControls,
      })
    );
  },
});
