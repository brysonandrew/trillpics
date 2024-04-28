import { useBoxBorder } from "~/store/hooks/core/box/use-box-border";
import { useBoxSize } from "~/store/hooks/core/box/use-box-size";
import { TCoreState } from "~/store/slices/core/types";

type TConfig = {
  layer: "flat" | "floating";
  borderRadius?: "borderRadius";
  size?: keyof TCoreState["box"]["size"];
};
export const useBoxStyle = ({
  layer,
  borderRadius,
  size,
}: TConfig) => {
  const boxBorder = useBoxBorder({
    layer,
    borderRadius,
  });
  const boxSize = useBoxSize({ size });
  return { ...boxBorder, ...boxSize };
};
export type TUseBoxStyle = ReturnType<
  typeof useBoxStyle
>;
