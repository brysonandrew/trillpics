import {
  BOX_SIZE,
  TBoxSizesKey,
} from "~/constants/box/size/constants";
import { isDefined } from "~/utils/validation/is/defined";

export const boxSize = (
  key?: TBoxSizesKey
) => {
  const boxSize = BOX_SIZE;
  return {
    ...(boxSize && isDefined(key)
      ? {
          ...boxSize,
          size: boxSize[key],
          sizeHalf: boxSize[key] * 0.5,
          minWidth: boxSize[key],
          minHeight: boxSize[key],
          padding: BOX_SIZE.padding,
        } as const
      : boxSize),
  };
};
export type TBoxSize = ReturnType<
  typeof boxSize
>;
