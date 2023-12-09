import { THslConfig } from './types';

export const resolveHsl = ({
  hue,
  saturation,
  lightness,
}: THslConfig): string =>
  `hsl(${hue}, ${saturation}%, ${lightness}%)`;
