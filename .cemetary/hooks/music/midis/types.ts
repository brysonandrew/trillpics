import { TMultiOptions } from "react-synthwave";
import {
  MIDIS_KEYS,
} from "~/hooks/music/midis/constants";
import { TPlayStepSchedule } from "~/hooks/music/play/schedule";

export type TMutableNodes = (
  | number
  | null
)[];

export type TBaseMidiValue =
  | number
  | null;
export type TMidiSubsteps =
  TBaseMidiValue[];

export type TMidiValue =
  | TBaseMidiValue
  | TMidiSubsteps;

export type TMidiValues =
  readonly TMidiValue[];

export type TPlayMidisOptions = Partial<
  TMultiOptions & {
    schedule?: TPlayStepSchedule<"synth">;
    volume?: number;
    duration?: number;
    type?: OscillatorType;
    stepIndex?: number;
    loopIndex?: number;
  }
>;

export type TMidisStepsKeys =
  typeof MIDIS_KEYS;
export type TMidisStepsKey =
  TMidisStepsKeys[number];
export type TNodesRecord = {
  synth: TMidiValues;
};


export type TMidisRecord = Record<
TMidisStepsKey,
  TMidiValues
>;
export type TMidisPresetRecord = Record<
  string,
  Partial<TMidisRecord>
>;
