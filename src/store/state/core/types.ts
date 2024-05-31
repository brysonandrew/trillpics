import { TInitVideoState } from "~/pages/video/player/_context/init/types";
import { TScreen } from "~/shell/init/hooks/measure/measure";
import { TMilestones } from "~/types/milestones";

export type TCoreKey = string | number;

export type TCoreScreenState = {
  screen: TScreen;
  isOnscreen: boolean;
  toggleOnscreen(next?: boolean): void;
};
export type TCoreControlsState = {
  isIdle: boolean;
  isControls: boolean;
  toggleControls(next?: boolean): void;
};
export type TCoreState =
  TInitVideoState &
    TCoreControlsState &
    TCoreScreenState & {
      milestones: TMilestones;
    };
