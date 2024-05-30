import { TScreen } from "~/shell/init/hooks/measure/measure";
import { TMilestones } from "~/types/milestones";

export type TCoreKey = string | number;

export type TCoreScreenState = {
  screen: TScreen;
  isOnscreen: boolean;
  toggleOnscreen(next?: boolean): void;
};
export type TCoreControlsState = {
  isIdle: boolean
  isControls: boolean;
  toggleControls(next?: boolean): void;
};
export type TCoreState =
  TCoreControlsState &
    TCoreScreenState & {
      milestones: TMilestones;
    };
