import { TScreen } from "~/shell/init/measure";
import { TStateCreator } from "~/store/types";
import { TMilestones } from "~/types/milestones";

export type TCoreKey = string | number;

export type TCoreScreenState = {
  screen: TScreen;
  isOnscreen: boolean;
  toggleOnscreen(next?: boolean): void;
};
export type TCoreControlsState = {
  isControls: boolean;
  toggleControls(next?: boolean): void;
};
export type TCoreState =
  TCoreControlsState &
    TCoreScreenState & {
      milestones: TMilestones;
    };

export type TCoreStateCreator =
  TStateCreator<TCoreState>;
