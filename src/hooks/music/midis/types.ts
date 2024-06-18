import { TMultiOptions } from "react-synthwave";
import { MIDIS } from "~/hooks/music/midis/constants";

export type TMutableMidis = (
  | number
  | null
)[];

export type TBaseMidiValue = number | null;
export type TMidiSubsteps = TBaseMidiValue[];

export type TMidiValue =
  | TBaseMidiValue
  | TMidiSubsteps;

export type TMidiValues =
  readonly TMidiValue[];

export type TPlayMidisOptions =
  TMultiOptions & {
    volume?: number;
    duration?: number;
    type?: OscillatorType;
    stepIndex?:number
  };

export type TMidisStepsKeys =
  typeof MIDIS;
export type TMidisStepsKey =
  TMidisStepsKeys[number];
export type TMidisRecord = {
  synth: TMidiValues;
};
