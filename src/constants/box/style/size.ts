import { BOX } from "~/constants/box";
import { TBoxStyleConfig } from "~/constants/box/style/types";
import { isDefined } from "~/utils/validation/is/defined";

type TConfig = {
  size?: keyof TBoxStyleConfig["size"];
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
        }
      : box.size),
  };
};
export type TBoxSize = ReturnType<
  typeof boxSize
>;
