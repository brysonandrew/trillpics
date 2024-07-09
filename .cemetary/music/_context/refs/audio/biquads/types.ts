
export type TBiquadCreate = (
  options?: BiquadFilterOptions
) => BiquadFilterNode;
export type TBiquadRecycle = (
  gain: BiquadFilterNode
) => BiquadFilterOptions;

export type TBiquadRefs = Record<
  string,
  BiquadFilterNode
>;
export type TBiquadsConnect = (
  ouput: AudioNode
) => BiquadFilterNode;

export type TBiquads = {
  key:'biquad',
  recycle: TBiquadRecycle;
  create: TBiquadCreate;
  connect:TBiquadsConnect
  refs:TBiquadRefs
};
