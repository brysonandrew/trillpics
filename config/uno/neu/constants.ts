import { resolveShadow } from './resolveShadow';
import { TNeuClass } from './types';

export const NEU_CLASSES = [
  'neu-basic',
  'neu-empty',
  'neu-text',
  'neu-flat-risen',
  'neu-flat-sunken',
  'neu-empty-flat-risen',
  'neu-empty-flat-sunken',
] as const;

export type TNewClassesRecord = Record<
  TNeuClass,
  TNeuClass
>;
export const NEU_CLASSES_RECORD =
  NEU_CLASSES.reduce(
    (a, c: TNeuClass) => {
      a[c] = c;
      return a;
    },
    {} as TNewClassesRecord,
  );

export const HSL_KEYS = [
  'hue',
  'saturation',
  'lightness',
] as const;

export const NEU_KEYS = [
  ...HSL_KEYS,
  'size',
  'blur',
] as const;

export const TRANSPARENT =
  'rgba(0,0,0,0)';

export const EMPTY_SHADOW =
  resolveShadow({
    size: 0,
    blur: 0,
    color: {
      fill: TRANSPARENT,
      back: TRANSPARENT,
    },
  });
export const EMPTY_NEU_SHADOW = `${EMPTY_SHADOW.fill}, ${EMPTY_SHADOW.back}`;
