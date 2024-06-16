import { TMultiOptions } from "react-synthwave";
import { TBeatValue } from "~/hooks/music/beats/types";
import { MIDIS } from "~/hooks/music/midis/constants";

export type TMutableMidis = (
  | number
  | null
)[];

export type TMidiValue = number | null;

export type TMidiValues =
  readonly TMidiValue[];

export type TPlayMidisOptions =
  TMultiOptions & {
    volume?: number;
    duration?: number;
    type?: OscillatorType;
  };

export type TMidisStepsKeys =
  typeof MIDIS;
export type TMidisStepsKey =
  TMidisStepsKeys[number];
export type TMidisRecord = { synth: TMidiValues }