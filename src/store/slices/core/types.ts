import { TScreen } from "~/shell/init/measure";
import { TStateCreator } from "~/store/types";
import { TMilestones } from "~/types/milestones";

export type TCoreKey = string | number;
export type TBoxStyleConfig = {
  borderRadius: number;
  floating: {
    boxShadow: string;
  };
  flat: {
    boxShadow: string;
  };
  size: {
    md: string;
    sm: string;
    minWidth: string;
    minHeight: string;
  };
};
export type TCoreScreenState = {
  screen: TScreen;
  isOnscreen: boolean;
  toggleOnscreen(next?: boolean): void;
};
export type TCoreBoxState = {
  box: TBoxStyleConfig;
};
export type TCoreControlsState = {
  isControls: boolean;
  toggleControls(next?: boolean): void;
};
export type TCoreState =
  TCoreControlsState &
    TCoreBoxState &
    TCoreScreenState & {
      milestones: TMilestones;
    };

export type TCoreStateCreator =
  TStateCreator<TCoreState>;
