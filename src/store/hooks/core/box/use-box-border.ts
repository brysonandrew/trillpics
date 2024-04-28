import { useBoxStyleConfig } from "~/store/hooks/core";

type TConfig = {
  layer: "flat" | "floating";
  borderRadius?: "borderRadius";
};
export const useBoxBorder = ({
  layer,
  borderRadius,
}: TConfig) => {
  const box = useBoxStyleConfig();
  return {
    ...box[layer],
    ...(borderRadius
      ? {
          [borderRadius]:
            box[borderRadius],
        }
      : {}),
  };
};
export type TUseBoxBorder = ReturnType<
  typeof useBoxBorder
>;
