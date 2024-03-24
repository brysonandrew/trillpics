import { Rule } from 'unocss';
import { SHADOWS } from './shadows';
import { BORDERS } from './borders';
import { CURSORS } from './cursors';
import { NEU } from './neu';
import { resolveRules as _resolveRules } from '@brysonandrew/uno-rules';

export const resolveRules = <
  T extends object,
>() =>
  [
    ...CURSORS,
    ...SHADOWS,
    ...BORDERS,
    ...NEU,
    ..._resolveRules<T>(),
    [
      'fade-in-animation',
      {
        'animation-name': 'fade-in',
        'animation-delay': '0ms',
        'animation-duration': '600ms'
      }
    ],
    [
      'fade-out-animation',
      {
        'animation-name': 'fade-out',
        'animation-delay': '0ms',
        'animation-duration': '600ms'
      }
    ]
  ] as Rule<T>[];
