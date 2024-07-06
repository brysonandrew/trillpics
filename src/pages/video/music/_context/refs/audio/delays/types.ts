export type TDelayCreate = (
  options?: DelayOptions
) => DelayNode;
export type TDelayRecycle = (
  gain: DelayNode
) => DelayOptions;

export type TDelaysConnect = (
  output: AudioNode, options?:DelayOptions
) => DelayNode;

export type TDelays = {
  key:'delay',
  recycle: TDelayRecycle;
  create: TDelayCreate;
  connect:TDelaysConnect
  refs:TDelayRefs
};

export type TDelayRefs = Record<
  string,
  DelayNode
>;
