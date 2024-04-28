import { coreControlsState } from "~/store/slices/core/controls";
import { coreScreenState } from "~/store/slices/core/screen";
import { TCoreState } from "~/store/slices/core/types";
import { TStateHandler } from "~/store/types";

export const coreState: TStateHandler<
  TCoreState
> = (...args): TCoreState => {
  const [set, get] = args;
  return {
    ...coreScreenState(...args),
    ...coreControlsState(...args),
    milestones: [],
  };
};
