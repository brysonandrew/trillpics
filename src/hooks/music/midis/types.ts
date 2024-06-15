import { TMultiOptions } from "react-synthwave";
import { MIDIS } from "~/hooks/music/midis/constants";

export type TMutableMidis = (
  | number
  | null
)[];

export type TMidiValue =(
  | number
  | null
)

export type TMidiValues = readonly TMidiValue[];
export type TPlayMidisOptions =
  TMultiOptions & {
    volume?: number;
    duration?: number;
    type?: OscillatorType;
  };
export type TMidisSequenceKey =
  (typeof MIDIS)[number];
