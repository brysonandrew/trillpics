import { coreControlsState } from "~/store/state/core/controls";
import { coreScreenState } from "~/store/state/core/screen";
import { TCoreState } from "~/store/state/core/types";
import { TStateHandler } from "~/store/types";

export const coreState: TStateHandler<
  TCoreState
> = (...args): TCoreState => {
  return {
    ...coreScreenState(...args),
    ...coreControlsState(...args),
    milestones: [],
  };
};
