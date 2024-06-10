import { TBeats } from "~/hooks/sound/beats/types";
import { TMidis } from "~/hooks/sound/midis/types";

export type TPlayOptions = {
  volume?: number;
};

export type TStepValue = (
  | TBeats
  | TMidis
)[number];
