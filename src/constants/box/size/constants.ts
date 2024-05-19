const PADDING = 8;
const BOX_SIZE_M = 40;
const BOX_SIZE_S =
  BOX_SIZE_M - PADDING;
const BOX_SIZE_XS =
  BOX_SIZE_S - PADDING;
const DEFAULT_SIZE_BOX_SIZE =
  BOX_SIZE_M;

const BOX_SIZES = {
  s: BOX_SIZE_S,
  m: BOX_SIZE_M,
  xs: BOX_SIZE_XS,
} as const;
export const BOX_SIZE = {
  ...BOX_SIZES,
  s05: BOX_SIZE_S * 0.5,
  s025: BOX_SIZE_S * 0.25,
  m05: BOX_SIZE_M * 0.5,
  m025: BOX_SIZE_M * 0.25,
  m2: BOX_SIZE_M * 2,
  m4: BOX_SIZE_M * 4,
  size: DEFAULT_SIZE_BOX_SIZE,
  minWidth: DEFAULT_SIZE_BOX_SIZE,
  minHeight: DEFAULT_SIZE_BOX_SIZE,
  width: DEFAULT_SIZE_BOX_SIZE,
  height: DEFAULT_SIZE_BOX_SIZE,
  padding: PADDING,
} as const;

export type TBoxSizesKey =
  keyof typeof BOX_SIZES;
