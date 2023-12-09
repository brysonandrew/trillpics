import { Rule } from 'unocss';
import { TTheme } from '../theme';

export const CURSORS: Rule<TTheme>[] = [
  [
    'zoom-in',
    {
      cursor: 'zoom-in',
    },
  ],
  [
    'zoom-out',
    {
      cursor: 'zoom-out',
    },
  ],
];
