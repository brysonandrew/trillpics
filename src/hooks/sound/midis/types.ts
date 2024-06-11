import { TMultiOptions } from "react-synthwave";
import { MIDIS } from "~/hooks/sound/midis/constants";

export type TMidis = readonly (
  | number
  | null
)[];
export type TPlayMidisOptions =
  TMultiOptions & {
    volume?: number;
    duration?: number;
    type?: OscillatorType;
  };
export type TMidisSequenceKey =
  (typeof MIDIS)[number];
