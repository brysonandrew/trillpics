export type TFilterCreate = (
  options?: BiquadFilterOptions
) => BiquadFilterNode;
export type TFilterRecycle = (
  gain: BiquadFilterNode
) => BiquadFilterOptions;

export type TFilterRefs = Record<
  string,
  BiquadFilterNode
>;
export type TFiltersConnect = (
  ouput: AudioNode
) => BiquadFilterNode;

export type TFilters = {
  key:'filter',
  recycle: TFilterRecycle;
  create: TFilterCreate;
  connect:TFiltersConnect
  refs:TFilterRefs
};
