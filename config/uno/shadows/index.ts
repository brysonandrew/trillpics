import { COLOR_RECORD } from '@app/color';

const resolveShadow = (
  colorKey: keyof typeof COLOR_RECORD,
  blur: number,
) =>
  `0 0 ${blur}px ${COLOR_RECORD[colorKey]}`;

export const GLOW_PRIMARY_2 =
  resolveShadow('primary', 2);
export const GLOW_PRIMARY_4 =
  resolveShadow('primary', 4);

export const GLOW_BABY_BLUE_1 =
  resolveShadow('secondary', 1);

export const GLOW_BABY_BLUE_4 =
  resolveShadow('secondary', 4);

export const GLOW_BLACK_1 =
  resolveShadow('black', 1);

export const GLOW_BLACK_2 =
  resolveShadow('black', 2);

export const GLOW_BLACK_4 =
  resolveShadow('black', 4);

export const GLOW_BLACK_1_BABY_BLUE_1 = `${GLOW_BLACK_1}, ${GLOW_BABY_BLUE_1}`;

export const GLOW_BLACK_2_BABY_BLUE_4 = `${GLOW_BLACK_2}, ${GLOW_BABY_BLUE_4}`;

export const GLOW_CURSOR_LIGHT_4 =
  resolveShadow('gray', 4);

export const GLOW_PRIMARY_BRIGHT_4 =
  resolveShadow('accent', 4);

export const GLOW_PRIMARY_BRIGHT_12 =
  resolveShadow('accent', 12);
