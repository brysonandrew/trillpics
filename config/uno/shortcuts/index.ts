import type { StaticShortcutMap } from 'unocss';
import { INPUT } from './input';
import { POSITION } from './position';
import { GRID } from './grid';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';
import { GRADIENT } from './gradient';
import { SHORTCUTS as _SHORTCUTS } from '@brysonandrew/uno-shortcuts';

export const SHORTCUTS: StaticShortcutMap =
  {
    ..._SHORTCUTS,
    'bg-section':
      'bg-white-8 dark:bg-black-1',
    'bg-section-02':
      'bg-white-02 dark:bg-black-02',
    'text-section':
      'dark:text-white-8 text-black-1',
    'bg-section-inverted':
      'dark:bg-black-1 bg-white-8',
    'text-section-inverted':
      'dark:text-black-1 text-white-8',
    'bg-main':
      'bg-white-9 dark:bg-black-2',
    'text-main':
      'text-black-1 dark:text-white-9',
    ...GRID,
    ...INPUT,
    ...POSITION,
    ...INTERACTIVE,
    ...LAYOUT,
    ...GRADIENT,
  } as const;
