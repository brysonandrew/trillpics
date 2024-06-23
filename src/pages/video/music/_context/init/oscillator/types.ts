export type TOscillator = {
  node: OscillatorNode;
  isStarted: boolean;
  prevHz:number
  recycle: (
    node: OscillatorNode
  ) => OscillatorOptions;
  create: (
    options: OscillatorOptions
  ) => OscillatorNode;
};
