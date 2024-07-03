export type TGainCreate = (
  options?: GainOptions
) => GainNode;
export type TGainRecycle = (
  gain: GainNode
) => GainOptions;

export type TDualAmp = {
  preamp: GainNode;
  master: GainNode;
};
export type TGainRef = {
  node:GainNode
  input?:AudioNode;
  output:AudioNode
};
export type TGainConnect = (
  node: AudioNode
) => TGainRef;

export type TGainRefs = Record<
  string,
  TGainRef
>;
export type TGains = {
  key:'gain',
  beats: TDualAmp;
  master: GainNode;
  midis: TDualAmp;
  recycle: TGainRecycle;
  create: TGainCreate;
  connect:TGainConnect
  refs:TGainRefs
};
