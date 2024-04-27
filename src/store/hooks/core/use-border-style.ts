import { useTrillPicsStore } from "~/store";
import { TCoreState } from "~/store/slices/core/types";

type TConfig = {
  layer: "flat" | "floating";
  borderRadius?: "borderRadius";
  size?: "size";
};
export const useBorderStyle = ({
  layer,
  borderRadius,
  size,
}: TConfig) => {
  const state = useTrillPicsStore(
    (s: TCoreState) => ({
      ...s[layer],
      ...(borderRadius
        ? {
            [borderRadius]:
              s[borderRadius],
          }
        : {}),
      ...(size
        ? {
            minWidth: s[size],
            minHeight: s[size],
          }
        : {}),
    })
  );
  return state as any;
};
