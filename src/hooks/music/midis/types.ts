import { TMultiOptions } from "react-synthwave";
import { MIDIS } from "~/hooks/music/midis/constants";
import { TOscillatorOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/hooks/types";
import { TPlayStepConfig } from "~/hooks/music/play/schedule";

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
    schedule?: TPlayStepConfig<"synth">;
    volume?: number;
    duration?: number;
    type?: OscillatorType;
    stepIndex?: number;
    loopIndex?: number;
  }
>;

export type TMidisStepsKeys =
  typeof MIDIS;
export type TMidisStepsKey =
  TMidisStepsKeys[number];
export type TNodesRecord = {
  synth: TMidiValues;
};
