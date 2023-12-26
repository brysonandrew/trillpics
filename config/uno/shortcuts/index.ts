import type { StaticShortcutMap } from 'unocss';
import { INPUT } from './input';
import { FLEX } from './flex';
import { POSITION } from './position';
import { GRID } from './grid';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';

export const SHORTCUTS: StaticShortcutMap =
  {
    'bg-section':
      'bg-white-8 dark:bg-black-1',
    'text-section':
      'dark:text-white-8 text-black-1',
    'bg-section-inverted':
      'bg-black-1 dark:bg-white-9',
    'bg-main':
      'bg-white-9 dark:bg-black-1',
    'text-main':
      'text-black-1 dark:text-white-9',
    ...GRID,
    ...FLEX,
    ...INPUT,
    ...POSITION,
    ...INTERACTIVE,
    ...LAYOUT,
  } as const;
