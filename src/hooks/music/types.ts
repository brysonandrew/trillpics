import { TBeatValues } from "~/hooks/music/beats/types";
import { TMidis } from "~/hooks/music/midis/types";

export type TPlayOptions = {
  volume?: number;
};

export type TStepValue = (
  | TBeatValues
  | TMidis
)[number];
