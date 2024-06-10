import { MIDIS } from "~/hooks/sound/midis/constants";

export type TMidis = readonly (
  | number
  | null
)[];
export type TPlayMidisOptions = {
  volume?: number;
  duration?: number;
  type?: OscillatorType;
};
export type TMidisSequenceKey =
  (typeof MIDIS)[number];
