import type { StaticShortcutMap } from 'unocss';
import { INPUT } from './input';
import { FLEX } from './flex';
import { POSITION } from './position';
import { GRID } from './grid';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';
import { GRADIENT } from './gradient';

export const SHORTCUTS: StaticShortcutMap =
  {
    'bg-section':
      'bg-white-8 dark:bg-black-1',
    'text-section':
      'dark:text-white-8 text-black-1',
    'bg-section-inverted':
      'dark:bg-black-1 bg-white-8',
    'text-section-inverted':
      'dark:text-black-1 text-white-8',
    'bg-main':
      'bg-white-9 dark:bg-black-1',
    'text-main':
      'text-black-1 dark:text-white-9',
    'text-nav':
      'relative text-lg uppercase whitespace-nowrap tracking-widest font-sans',
    ...GRID,
    ...FLEX,
    ...INPUT,
    ...POSITION,
    ...INTERACTIVE,
    ...LAYOUT,
    ...GRADIENT,
  } as const;
