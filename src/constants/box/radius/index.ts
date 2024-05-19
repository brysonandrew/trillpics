
const BORDER_RADIUS = {
  s: 2,
  m: 4,
  l: 8,
  xl: 40,
} as const;

export type TBoxRadiusKey =
  keyof typeof BORDER_RADIUS;
export const boxRadius = (
  key: TBoxRadiusKey = "xl"
) => {
  return BORDER_RADIUS[key];
};

export {BORDER_RADIUS}