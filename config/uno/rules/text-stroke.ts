import type { Rule } from 'unocss';

const resolveTextStroke = (
  colors: string[],
): Rule[] => {
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
  'secondary',
  'secondary-01',
  'secondary-02',
  'accent-02',
]);
