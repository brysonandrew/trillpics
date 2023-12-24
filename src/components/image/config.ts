export const POSITIONS = [
  'absolute cursor-zoom-in',
  'fixed left-0 top-0 cursor-zoom-out',
] as const;

export type TPositionKey =
  (typeof POSITIONS)[number];

export const Z_INDICIES = [
  0, 50000,
] as const;

export type TZIndexKey =
  (typeof Z_INDICIES)[number];
