export type TGainCreate = (
  options: GainOptions
) => GainNode;
export type TGainRecycle = (
  gain: GainNode
) => GainOptions;

type TDualAmp = {
  preamp: GainNode;
  master: GainNode;
};
export type TGains = {
  beats: TDualAmp;
  master: GainNode;
  midis: TDualAmp;
  recycle: TGainRecycle;
  create: TGainCreate;
};
