import {
  TBreakpointKey,
  THEME,
} from '@uno/theme';
const { breakpoints } = THEME;

export const formatMediaMinWidth = (
  size: `${string}px`,
) => `@media (min-width: ${size})`;

export const resolveBreakpoint = (
  key: TBreakpointKey,
) =>
  formatMediaMinWidth(breakpoints[key]);

const { md, lg, xl } = breakpoints;

export const MD =
  formatMediaMinWidth(md);
export const LG =
  formatMediaMinWidth(lg);
export const XL =
  formatMediaMinWidth(xl);
