export type TOscillatorCreate = (
  OscillatorOptions: OscillatorOptions
) => OscillatorNode;
export type TOscillatorRecycle = (
  oscillator: OscillatorNode
) => OscillatorOptions;

export type TOscillator = {
  node: OscillatorNode;
  isStarted: boolean;
  prevHz: number;
  recycle: TOscillatorRecycle;
  create: TOscillatorCreate;
};
