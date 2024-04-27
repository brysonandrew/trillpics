import {
  BOX_SHADOW_FLAT,
  BOX_SHADOW_FLOATING,
} from "~/components/buttons/use-border-style/md";
import { TCoreState } from "~/store/slices/core/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";
import { BORDER_RADIUS } from "~app/style/border-radius";

export const coreState: TStateHandler<
  TCoreState
> = (set, get): TCoreState => ({
  borderRadius: BORDER_RADIUS.XL,
  floating: {
    boxShadow: BOX_SHADOW_FLOATING,
  },
  flat: {
    boxShadow: BOX_SHADOW_FLAT,
  },
  size: "2.5rem",
  milestones: [],
  isControls: true,
  toggleControls: (next?: boolean) => {
    set((prev: TState) => ({
      isControls:
        next ?? !prev.isControls,
    }));
  },
});
