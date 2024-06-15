import { TBeatValues } from "~/hooks/music/beats/types";
import { TMidiValues } from "~/hooks/music/midis/types";

export type TPlayOptions = {
  volume?: number;
};

export type TStepValue = (
  | TBeatValues
  | TMidiValues
)[number];
