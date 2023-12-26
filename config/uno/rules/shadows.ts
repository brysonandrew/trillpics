import { Rule } from 'unocss';
import { TTheme } from '../theme';

export const SHADOWS: Rule<TTheme>[] = [
  [
    'shadow-1-white',
    {
      'box-shadow':
        '0 0 1px 2px var(--white)',
    },
  ],
  [
    'shadow-1-gray',
    {
      'box-shadow':
        '0 0 1px 2px var(--gray)',
    },
  ],
  [
    'shadow-1-gray-02',
    {
      'box-shadow':
        '0 0 1px 2px var(--gray-02)',
    },
  ],
  [
    'shadow-1-gray-04',
    {
      'box-shadow':
        '0 0 1px 2px var(--gray-04)',
    },
  ],
  [
    'shadow-1-teal-04',
    {
      'box-shadow':
        '0 0 1px 2px var(--teal-04)',
    },
  ],
];
