import defaultTheme from 'tailwindcss/defaultTheme';
const DEFAULT_SANS =
  defaultTheme.fontFamily.sans;
const withDefaultSans = (
  value: string,
) => [`"${value}"`, ...DEFAULT_SANS];

export const FONTS: any[] = [
  {
    key: 'sans',
    name: withDefaultSans(
      'FFF Forward',
    ),
    provider: 'none',
  },
  {
    key: 'display-outline',
    name: [
      withDefaultSans(
        'Saiba 45 Outline',
      ),
      ...DEFAULT_SANS,
    ],
    provider: 'none',
  },
  {
    key: 'display',
    name: [
      withDefaultSans('Saiba 45'),
      ...DEFAULT_SANS,
    ],
    provider: 'none',
  },
  {
    key: 'slab',
    name: [
      withDefaultSans('GType rGX9'),
      ...DEFAULT_SANS,
    ],
    provider: 'none',
  },
];
