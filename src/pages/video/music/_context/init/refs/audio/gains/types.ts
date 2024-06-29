export type TGainCreate = (
  options: GainOptions
) => GainNode;
export type TGainRecycle = (
  gain: GainNode
) => GainOptions;

export type TGains = {
  beats: GainNode;
  master: GainNode;
  midis: GainNode;
  recycle: TGainRecycle;
  create: TGainCreate;
};
