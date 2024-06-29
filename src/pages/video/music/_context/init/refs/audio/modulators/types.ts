export type TModulatorNodes = readonly [
  OscillatorNode,
  GainNode
];

export type TModulatorOptions =
  OscillatorOptions & GainOptions;
export type TModulatorCreate = (
  options: TModulatorOptions
) => TModulatorNodes;

export type TModulatorRecycle = (
  oscillator: OscillatorNode,
  gain: GainNode
) => TModulatorOptions;

export type TModulatorCreateParameters =
  Parameters<TModulatorCreate>;
type TModulatorRef = {
  reconnect(
    param?: AudioParam
  ): TModulatorNodes;
  disconnect(): void;
};
export type TModulatorConnect = (
  param: AudioParam,
  options: TModulatorOptions
) => TModulatorRef & TModulatorNodes;

export type TModulatorRefs = Record<
  string,
  TModulatorRef
>;
export type TModulator = {
  connect: TModulatorConnect;
  // isStarted: boolean;
  // prevHz: number;
  recycle: TModulatorRecycle;
  // create: TModulatorCreate;
  refs: TModulatorRefs;
};
