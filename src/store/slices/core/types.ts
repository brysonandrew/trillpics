import { TStateCreator } from "~/store/types";
import { TMilestones } from "~/types/milestones";

export type TCoreKey = string | number;

export type TCoreState = {
  borderRadiusXl: number;
  milestones: TMilestones;
  isControls: boolean;
  toggleControls(next?: boolean): void;
};

export type TCoreStateCreator =
  TStateCreator<TCoreState>;
