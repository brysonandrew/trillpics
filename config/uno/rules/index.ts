import { Rule } from 'unocss';
import { RULES as TEXT_STROKE } from './text-stroke';
import { SHADOWS } from './shadows';
import { BORDERS } from './borders';
import { CURSORS } from './cursors';
import { NEU } from './neu';

export const resolveRules = <
  T extends object,
>() => [
  ...TEXT_STROKE,
  ...CURSORS,
  ...SHADOWS,
  ...BORDERS,
  ...NEU,
] as Rule<T>[];
