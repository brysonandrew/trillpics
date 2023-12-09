import {
  CSSEntries,
  CSSObject,
} from 'unocss';
import {
  HSL_KEYS,
  NEU_CLASSES,
  NEU_KEYS,
} from './constants';
import { TRequireAtLeastOne } from './mappers';

export type TClampBaseConfig = {
  value: number;
  min?: number;
  max?: number;
};

export type TClampConfig =
  TRequireAtLeastOne<
    TClampBaseConfig,
    'min' | 'max'
  >;

export type THslConfig = {
  hue: number;
  saturation: number;
  lightness: number;
};

export type TNeuKey =
  (typeof NEU_KEYS)[number];
export type TNeuValue = number | string;

export type TNeuBoxConfig =
  THslConfig & {
    size: number;
    blur: number;
  };

export type TNeuClass =
  (typeof NEU_CLASSES)[number];
export type TNeuStyleValue =
  | CSSObject
  | CSSEntries;
export type TNeuStyleReturn = Record<
  TNeuClass,
  TNeuStyleValue
>;

// & {
//   common: TNeuStyleValue;
//   emptyCommon: TNeuStyleValue;
//   text: TNeuStyleValue;
//   emptyText: TNeuStyleValue;
// };

export type TNeuColor = {
  fill: string;
  back: string;
  text?: string;
  emptyText?: TNeuStyleValue;
};

export type TShadowReturn = {
  fill: string;
  back: string;
  emptyFill: string;
  emptyBack: string;
};
export type TShadowConfig = Pick<
  TNeuBoxConfig,
  'blur' | 'size'
> & { color: TNeuColor };

export type THslKey =
  (typeof HSL_KEYS)[number];
