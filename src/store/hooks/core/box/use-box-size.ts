import { useBoxStyleConfig } from "~/store/hooks/core";
import { TCoreState } from "~/store/slices/core/types";
import { isDefined } from "~/utils/validation/is/defined";

type TConfig = {
  size?: keyof TCoreState["box"]["size"];
};
export const useBoxSize = ({
  size,
}: TConfig) => {
  const box = useBoxStyleConfig();
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
export type TUseBoxSize = ReturnType<
  typeof useBoxSize
>;
