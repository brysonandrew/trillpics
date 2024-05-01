import { BOX } from "~/constants/box";
import { TBoxStyleTheme } from "~/constants/box/style/types";
import { isDefined } from "~/utils/validation/is/defined";

export const BOX_SIZE_MD = 44;
export const BOX_SIZE_SM = 40;
export const DEFAULT_SIZE_BOX_SIZE =
  BOX_SIZE_MD;

export const BOX_SIZE = {
  md: DEFAULT_SIZE_BOX_SIZE,
  sm: BOX_SIZE_SM,
  minWidth: DEFAULT_SIZE_BOX_SIZE,
  minHeight: DEFAULT_SIZE_BOX_SIZE,
  padding:
    (BOX_SIZE_MD - BOX_SIZE_SM) * 0.5,
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
