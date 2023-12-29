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
    'dark-mode-transition':
      'transition-colors duration-1000',
    'bg-section':
      'bg-white-8 dark:bg-black-1 dark-mode-transition',
    'bg-section-02':
      'bg-white-02 dark:bg-black-02 dark-mode-transition',
    'text-section':
      'dark:text-white-8 text-black-1 dark-mode-transition',
    'bg-section-inverted':
      'dark:bg-black-1 bg-white-8 dark-mode-transition',
    'text-section-inverted':
      'dark:text-black-1 text-white-8 dark-mode-transition',
    'bg-main':
      'bg-white-9 dark:bg-black-2 dark-mode-transition',
    'text-main':
      'text-black-1 dark:text-white-9 dark-mode-transition',
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
