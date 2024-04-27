import { TStateCreator } from "~/store/types";
import { TMilestones } from "~/types/milestones";

export type TCoreKey = string | number;

export type TCoreState = {
  borderRadius: number;
  floating: {
    boxShadow: string;
  };
  flat: {
    boxShadow: string;
  };
  size: '2.5rem',
  milestones: TMilestones;
  isControls: boolean;
  toggleControls(next?: boolean): void;
};

export type TCoreStateCreator =
  TStateCreator<TCoreState>;
