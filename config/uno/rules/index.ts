import { Rule } from 'unocss';
import { RULES as TEXT_STROKE } from './text-stroke';

import { TTheme } from '../theme';
import { SHADOWS } from './shadows';
import { BORDERS } from './borders';
import { CURSORS } from './cursors';
import { NEU } from './neu';

export const RULES: Rule<TTheme>[] = [
  ...TEXT_STROKE,
  ...CURSORS,
  ...SHADOWS,
  ...BORDERS,
  ...NEU,
];
