import {
  boxStyle,
  TBoxStyleConfig,
} from "~/constants/box/style";

export const boxStyleFloating = (
  config?: Omit<
    TBoxStyleConfig,
    "layer"
  >
) => {
  const floating = boxStyle({
    layer: "floating",
    ...config,
  });
  return floating;
};
