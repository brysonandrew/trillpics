const PADDING = 8;
const BOX_SIZE_M = 40;

const BOX_SIZE_S = BOX_SIZE_M - PADDING;
const BOX_SIZE_XS =
  BOX_SIZE_S - PADDING / 2;
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

  m03125: BOX_SIZE_M * 0.03125,
  m0625: BOX_SIZE_M * 0.0675,
  m0125: BOX_SIZE_M * 0.125,
  m025: BOX_SIZE_M * 0.25,
  m05: BOX_SIZE_M * 0.5,
  m07: BOX_SIZE_M * 0.7,
  m075: BOX_SIZE_M * 0.75,
  m125: BOX_SIZE_M * 1.25,
  m15: BOX_SIZE_M * 1.5,
  m2: BOX_SIZE_M * 2,
  m25: BOX_SIZE_M * 2.5,

  m3: BOX_SIZE_M * 3,
  m4: BOX_SIZE_M * 4,
  m6: BOX_SIZE_M * 6,
  m8: BOX_SIZE_M * 8,

  size: DEFAULT_SIZE_BOX_SIZE,
  minWidth: DEFAULT_SIZE_BOX_SIZE,
  minHeight: DEFAULT_SIZE_BOX_SIZE,
  width: DEFAULT_SIZE_BOX_SIZE,
  height: DEFAULT_SIZE_BOX_SIZE,
  padding: PADDING,
} as const;

export type TBoxSizesKey =
  keyof typeof BOX_SIZES;
export const boxSize = (
  key?: TBoxSizesKey
) => {
  const boxSize = BOX_SIZE;
  return {
    ...(boxSize &&
    typeof key !== "undefined"
      ? ({
          ...boxSize,
          size: boxSize[key],
          sizeHalf: boxSize[key] * 0.5,
          minWidth: boxSize[key],
          minHeight: boxSize[key],
          padding: BOX_SIZE.padding,
        } as const)
      : boxSize),
  };
};
export type TBoxSize = ReturnType<
  typeof boxSize
>;
