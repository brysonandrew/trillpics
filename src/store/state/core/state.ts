import { INIT_VIDEO_STATE } from "~/pages/video/player/_context/init";
import { coreControlsState } from "~/store/state/core/controls";
import { coreScreenState } from "~/store/state/core/screen";
import { TCoreState } from "~/store/state/core/types";
import { TStateHandler } from "~/store/types";

export const coreState: TStateHandler<
  TCoreState
> = (...args): TCoreState => {
  return {
    ...INIT_VIDEO_STATE,
    ...coreScreenState(...args),
    ...coreControlsState(...args),
    milestones: [],
  };
};
