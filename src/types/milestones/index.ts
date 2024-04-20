import { MILESTONES } from "~/constants/milestones";

export type TAllMilestones =
  typeof MILESTONES;
export type TMilestone =
  TAllMilestones[number];
export type TMilestones = TMilestone[];
