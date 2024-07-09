import { ALL_PARAMS } from "~/pages/video/music/modulators/constants";

export type TAllParamsKey =
  (typeof ALL_PARAMS)[number];

export type TResolveAudioParamProps<
  T extends TAllParamsKey = TAllParamsKey
> = {
  resolveAudioParam: TResolveAudioParam<T>;
};
export type TResolveAudioParam<
  K extends string
> = (key: K) => AudioParam;
