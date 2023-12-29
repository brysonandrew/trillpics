import { Rule } from 'unocss';

import { TTheme } from '../theme';

export const BORDERS: Rule<TTheme>[] = [
  [
    'border-t-1-gray-01',
    {
      'border-top':
        '1px solid var(--gray-01)',
    },
  ],
  [
    'border-t-1-gray-02',
    {
      'border-top':
        '1px solid var(--gray-02)',
    },
  ],
  [
    'border-b-1-gray-02',
    {
      'border-bottom':
        '1px solid var(--gray-02)',
    },
  ],
  [
    'border-1-gray-01',
    {
      border:
        '1px solid var(--gray-01)',
    },
  ],
  [
    'border-1-gray-02',
    {
      border:
        '1px solid var(--gray-02)',
    },
  ],
  [
    'border-1-gray-04',
    {
      border:
        '1px solid var(--gray-04)',
    },
  ],
];
