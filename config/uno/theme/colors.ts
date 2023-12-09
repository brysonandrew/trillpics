import {
  COLOR_VARIABLES_LOOKUP,
  TColorKey,
} from '../../app/colors';

export const cssVar = (
  color: TColorKey,
) => `var(--${color})`;

const colors = Object.keys(
  COLOR_VARIABLES_LOOKUP,
).reduce(
  (a, key) => ({
    [key]: cssVar(key),
    ...a,
  }),
  {},
);

export const COLORS = colors as Record<
  TColorKey,
  string
>;
