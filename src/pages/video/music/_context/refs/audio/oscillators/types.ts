export type TOscillatorCreate = (
  OscillatorOptions: OscillatorOptions
) => OscillatorNode;
export type TOscillatorRecycle = (
  oscillator: OscillatorNode
) => OscillatorOptions;
export type TOscillatorStart = (
  endTime?: number
) => void;
export type TOscillatorEnd = (
  endTime?: number
) => void;
export type TOscillator = {
  node: OscillatorNode;
  isStarted: boolean;
  end: TOscillatorEnd;
  start:TOscillatorStart
  output: AudioNode;
};
export type TOscillatorRefs = Record<
  string,
  TOscillator
>;
export type TOscillatorConnect = (
  node: AudioNode
) => TOscillator;
export type TOscillators = {
  key: "oscillator";

  recycle: TOscillatorRecycle;
  create: TOscillatorCreate;
  refs: TOscillatorRefs;
  connect: TOscillatorConnect;
};
