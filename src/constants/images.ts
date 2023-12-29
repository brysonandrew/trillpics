export const APPROX_IMAGE_SIZE = 512;
export const PENDING_DELIMITER = ':';
export const SIZES = [
  'sm',
  'md',
  'lg',
  'xl',
] as const;
export const COLORS = [
  'black',
  'white',
] as const;

export const INPUTS = [
  ['size', SIZES],
  ['color', COLORS],
] as const;
