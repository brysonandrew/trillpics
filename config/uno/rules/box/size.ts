const PADDING = 8;
const BOX_SIZE_M = 40;

const BOX_SIZE_S = BOX_SIZE_M - PADDING;
const BOX_SIZE_XS =
  BOX_SIZE_S - PADDING / 2;
const DEFAULT_SIZE_BOX_SIZE =
  BOX_SIZE_M;

const BOX_SIZES = {
  s: BOX_SIZE_S,
  _: BOX_SIZE_M,
  xs: BOX_SIZE_XS,
} as const;
export const BOX_SIZE = {
  ...BOX_SIZES,
  s05: BOX_SIZE_S * 0.5,
  s025: BOX_SIZE_S * 0.25,

  _003125: BOX_SIZE_M * 0.03125,
  _00625: BOX_SIZE_M * 0.0625,
  _0125: BOX_SIZE_M * 0.125,
  _01875: BOX_SIZE_M * 0.1875,
  _025: BOX_SIZE_M * 0.25,
  _0375: BOX_SIZE_M * 0.375,
  _05: BOX_SIZE_M * 0.5,
  _0625: BOX_SIZE_M * 0.625,
  _07: BOX_SIZE_M * 0.7,
  _075: BOX_SIZE_M * 0.75,
  _125: BOX_SIZE_M * 1.25,
  _15: BOX_SIZE_M * 1.5,
  _175: BOX_SIZE_M * 1.75,

  _2: BOX_SIZE_M * 2,
  _25: BOX_SIZE_M * 2.5,

  _3: BOX_SIZE_M * 3,
  _35: BOX_SIZE_M * 3.5,
  _4: BOX_SIZE_M * 4,
  _5: BOX_SIZE_M * 5,

  _6: BOX_SIZE_M * 6,
  _8: BOX_SIZE_M * 8,

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
