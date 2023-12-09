import type { StaticShortcutMap } from 'unocss';

export const FLEX: StaticShortcutMap = {
  'inline-row':
    'inline-flex flex-row items-center',
  row: 'flex flex-row items-center',
  'row-wrap': 'row flex-wrap',
  'row-wrap-right':
    'row-wrap justify-end',
  'row-start':
    'flex flex-row items-start',
  'row-end': 'flex flex-row items-end',
  'row-space': 'row justify-between',
  'row-start-space':
    'row-start justify-between',
  'row-end-space':
    'row-end justify-between',
  column: 'flex flex-col items-center',
  'column-start':
    'flex flex-col items-start',
  'column-end':
    'flex flex-col items-end',
  'column-space':
    'column justify-between',
  center:
    'flex items-center justify-center',
  'column-start-end':
    'flex flex-column items-end justify-start',
};
