import { TScaleKey } from "~/constants/scales";

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

