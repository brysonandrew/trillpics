import { COLORS } from './colors';

const breakpoints = {
  xxxs: '280px',
  xxs: '320px',
  xs: '375px',
  sm: '480px',
  md: '768px',
  lg: '900px',
  xl: '1100px',
  xxl: '1420px',
  xxxl: '1800px',
} as const;

const width = {
  sm: '480px',
  md: '700px',
  lg: '890px',
  xl: '1090px',
  xxl: '1400px',
} as const;

export const THEME = {
  breakpoints,
  width,
  colors: COLORS,
} as const;

export type TTheme = typeof THEME;

export type TBreakpointKey =
  keyof typeof breakpoints;

export type TAnyTheme = TTheme & any;
