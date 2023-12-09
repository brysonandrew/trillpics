import type { Rule } from 'unocss';
import type { TTheme } from '../theme';

const resolveTextStroke = (
  colors: string[],
): Rule<TTheme>[] => {
  return colors.map((color: string) => {
    return [
      `text-stroke-${color}`,
      {
        'text-stroke': `1px var(--${color})`,
        '-webkit-text-stroke': `1px var(--${color})`,
      },
    ];
  });
};

export const RULES = resolveTextStroke([
  'red-02',
  'gray',
  'baby-blue',
  'baby-blue-01',
  'baby-blue-02',
  'teal-bright-02',
]);
