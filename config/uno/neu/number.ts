import { padZero } from "./format";
import { TClampConfig } from "./types";

export const invertHex = (
  hex: string,
) => {
  return (
    Number(`0x1${hex}`) ^ 0xffffff
  )
    .toString(16)
    .slice(1)
    .toUpperCase();
};

export const invertColor = (hex: string) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex =
      hex[0] +
      hex[0] +
      hex[1] +
      hex[1] +
      hex[2] +
      hex[2];
  }
  if (hex.length !== 6) {
    throw new Error(
      'Invalid HEX color.',
    );
  }
  const r = (
      255 -
      parseInt(hex.slice(0, 2), 16)
    ).toString(16),
    g = (
      255 -
      parseInt(hex.slice(2, 4), 16)
    ).toString(16),
    b = (
      255 -
      parseInt(hex.slice(4, 6), 16)
    ).toString(16);
  return (
    '#' +
    padZero(r) +
    padZero(g) +
    padZero(b)
  );
};

export const clampMin = (
  value: number,
  min: number,
) => Math.max(value, min);
export const clampMax = (
  value: number,
  max: number,
) => Math.min(value, max);

export const clamp = ({
  value,
  min,
  max,
}: TClampConfig) => {
  if (typeof min === 'number') {
    value = clampMin(min, value);
  }
  if (typeof max === 'number') {
    value = clampMax(max, value);
  }
  return value;
};
