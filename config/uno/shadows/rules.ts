import type { Rule } from 'unocss';
import type { TTheme } from '../theme';
import {
  GLOW_TEAL_2,
  GLOW_TEAL_4,
  GLOW_BABY_BLUE_4,
  GLOW_CURSOR_LIGHT_4,
  GLOW_BLACK_1_BABY_BLUE_1,
  GLOW_BLACK_2_BABY_BLUE_4,
} from '.';

export const RULES: Rule<TTheme>[] = [
  [
    'glow-interactive-dark',
    {
      'box-shadow': GLOW_TEAL_2,
    },
  ],
  [
    'glow-interactive-dark-lg',
    {
      'box-shadow': GLOW_TEAL_4,
    },
  ],
  [
    'glow-baby-blue',
    {
      'box-shadow': GLOW_BABY_BLUE_4,
    },
  ],
  [
    'glow-interactive-light',
    {
      'box-shadow': GLOW_BLACK_1_BABY_BLUE_1,
    },
  ],
  [
    'glow-interactive-light-lg',
    {
      'box-shadow': GLOW_BLACK_2_BABY_BLUE_4,
    },
  ],
  [
    'glow-cursor-light',
    { 'box-shadow': GLOW_CURSOR_LIGHT_4 },
  ],
];
