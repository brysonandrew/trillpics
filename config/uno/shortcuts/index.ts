import type { StaticShortcutMap } from 'unocss';
import { INPUT } from './input';
import { FLEX } from './flex';
import { POSITION } from './position';
import { GRID } from './grid';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';

export const SHORTCUTS: StaticShortcutMap =
  {
    ...GRID,
    ...FLEX,
    ...INPUT,
    ...POSITION,
    ...INTERACTIVE,
    ...LAYOUT,
  } as const;
