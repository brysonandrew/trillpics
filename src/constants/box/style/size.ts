import { BOX } from "~/constants/box";
import { TBoxStyleTheme } from "~/constants/box/style/types";
import { isDefined } from "~/utils/validation/is/defined";

const GAP = 4;
export const BOX_SIZE_MD = 44;
export const BOX_SIZE_SM =
  BOX_SIZE_MD - GAP;
export const BOX_SIZE_XS =
  BOX_SIZE_SM - GAP;
export const DEFAULT_SIZE_BOX_SIZE =
  BOX_SIZE_MD;

export const BOX_SIZE = {
  md: DEFAULT_SIZE_BOX_SIZE,
  sm: BOX_SIZE_SM,
  xs: BOX_SIZE_XS,
  size: DEFAULT_SIZE_BOX_SIZE,
  minWidth: DEFAULT_SIZE_BOX_SIZE,
  minHeight: DEFAULT_SIZE_BOX_SIZE,
  padding: GAP,
} as const;

type TConfig = {
  size?: keyof TBoxStyleTheme["size"];
};
export const boxSize = ({
  size,
}: TConfig) => {
  const box = BOX;
  return {
    ...(box.size && isDefined(size)
      ? {
          ...box.size,
          size: box.size[size],
          minWidth: box.size[size],
          minHeight: box.size[size],
          padding: BOX_SIZE.padding,
        }
      : box.size),
  };
};
export type TBoxSize = ReturnType<
  typeof boxSize
>;
