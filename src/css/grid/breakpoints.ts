import {
  TBreakpointKey,
  THEME,
} from '@uno/theme';
const { screen } = THEME;

export const formatMediaMinWidth = (
  size: `${string}px`,
) => `@media (min-width: ${size})`;

export const resolveBreakpoint = (
  key: TBreakpointKey,
) =>
  formatMediaMinWidth(screen[key]);

const { md, lg, xl } = screen;

export const MD =
  formatMediaMinWidth(md);
export const LG =
  formatMediaMinWidth(lg);
export const XL =
  formatMediaMinWidth(xl);
