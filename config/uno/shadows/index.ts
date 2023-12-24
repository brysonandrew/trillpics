import { COLORS } from "../theme/colors";

const resolveShadow = (
  colorKey: keyof typeof COLORS,
  blur: number,
) => `0 0 ${blur}px ${COLORS[colorKey]}`;

export const GLOW_TEAL_2 = resolveShadow('teal', 2);
export const GLOW_TEAL_4 = resolveShadow('teal', 4);

export const GLOW_BABY_BLUE_1 = resolveShadow(
  'baby-blue',
  1,
);

export const GLOW_BABY_BLUE_4 = resolveShadow(
  'baby-blue',
  4,
);

export const GLOW_BLACK_1 = resolveShadow('black', 1);

export const GLOW_BLACK_2 = resolveShadow('black', 2);

export const GLOW_BLACK_4 = resolveShadow('black', 4);

export const GLOW_BLACK_1_BABY_BLUE_1 = `${GLOW_BLACK_1}, ${GLOW_BABY_BLUE_1}`;

export const GLOW_BLACK_2_BABY_BLUE_4 = `${GLOW_BLACK_2}, ${GLOW_BABY_BLUE_4}`;

export const GLOW_CURSOR_LIGHT_4 = resolveShadow('gray', 4);

export const GLOW_TEAL_BRIGHT_4 = resolveShadow(
  'teal-bright',
  4,
);

export const GLOW_TEAL_BRIGHT_12 = resolveShadow(
  'teal-bright',
  12,
);
