import { TScaleKey } from "~/constants/scales";
import { TMidiValues } from "~/hooks/music/midis/types";

export type TScalePattern =
  | "asc"
  | "desc"
  | "random"
  | "hill"
  | "valley"
  | "alternating";

export type TScaleSliderOptions = {
  delta: number;
};

export type TScaleSliderOptionsKey =
  keyof TScaleSliderOptions;

export type TScaleOptions =
  TScaleSliderOptions & {
    pattern: TScalePattern;
    key: TScaleKey;
  };



type TScaleLookup = Record<
TScaleKey,
TMidiValues
>;
export type TPartialScaleLookup =
Partial<TScaleLookup>;

