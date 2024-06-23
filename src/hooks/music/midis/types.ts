import { TMultiOptions } from "react-synthwave";
import { number } from "zod";
import { MIDIS } from "~/hooks/music/midis/constants";
import {
  TOscillatorOptions,
  TOscillatorOptionsKey,
} from "~/pages/video/music/synth/nodes/oscillator/hooks/types";
import { TPlayStepConfig } from "~/hooks/music/play/schedule";
import { TOscillator } from "~/pages/video/music/_context/init/oscillator/types";

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

export type TPlayNodesOptions =
  TPlayStepConfig<"synth"> &
    Required<TMultiOptions> &
    Record<
      TOscillatorOptionsKey,
      number
    > & {
      volume?: number;
      duration?: number;
      type?: OscillatorType;
      stepIndex?: number;
      loopIndex?: number;
    };

export type TNodesStepsKeys =
  typeof MIDIS;
export type TNodesStepsKey =
  TNodesStepsKeys[number];
export type TNodesRecord = {
  synth: TMidiValues;
};
