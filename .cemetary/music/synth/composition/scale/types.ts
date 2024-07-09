import { TScaleKey } from "~/constants/scales";
import { TMidiValues } from "~/hooks/music/midis/types";

export type TScalePattern =
  | "asc"
  | "desc"
  | "random"
  | "hill"
  | "valley"
  | "alternating";

export type TScaleNumberOptions = {
  delta: number;
};

export type TScaleNumberOptionsKey =
  keyof TScaleNumberOptions;

export type TScaleOptions =
  TScaleNumberOptions & {
    pattern: TScalePattern;
    key: TScaleKey;
  };



type TScaleLookup = Record<
TScaleKey,
TMidiValues
>;
export type TPartialScaleLookup =
Partial<TScaleLookup>;

