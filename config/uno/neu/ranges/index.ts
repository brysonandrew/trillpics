import { TNeuKey } from '../types';
import { resolveRange } from './resolveRange';

export const NEU_RANGE_RECORD: Record<
  TNeuKey,
  number[]
> = {
  hue: resolveRange(0, 361, 11),
  saturation: resolveRange(0, 100, 4),
  lightness: resolveRange(0, 100, 4),
  size: resolveRange(0.5, 6, 0.1),
  blur: resolveRange(0.5, 6, 0.1),
};
