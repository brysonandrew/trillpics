import { COLOR_VARS_RECORD } from '@app/color';

const screen = {
  xxxs: '280px',
  xxs: '320px',
  xs: '375px',
  sm: '480px',
  md: '768px',
  lg: '900px',
  xl: '1100px',
  xxl: '1420px',
  xxxl: '1740px',
  xxxxl: '2280px',
} as const;

const width = {
  sm: '480px',
  md: '700px',
  lg: '890px',
  xl: '1090px',
  xxl: '1400px',
  xxxl: '1800px',
  xxxxl: '2200px',
} as const;

export const THEME = {
  screen,
  width,
  colors: COLOR_VARS_RECORD,
  // fontFamily: {
  //   sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
  // },
} as const;

export type TTheme = typeof THEME;

export type TBreakpointKey =
  keyof typeof screen;

export type TAnyTheme = TTheme & any;
