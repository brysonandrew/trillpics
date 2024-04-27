import { TCoreState } from "~/store/slices/core/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";
import { BORDER_RADIUS } from "~app/style/border-radius";

export const coreState: TStateHandler<
  TCoreState
> = (set, get): TCoreState => ({
  borderRadiusXl: BORDER_RADIUS.XL,
  milestones: [],
  isControls: true,
  toggleControls: (next?: boolean) => {
    set((prev: TState) => ({
      isControls:
        next ?? !prev.isControls,
    }));
  },
});
