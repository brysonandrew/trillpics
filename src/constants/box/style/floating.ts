import { boxStyle } from "~/constants/box/style";

export const boxStyleFloating =
  () => {
    const flat = boxStyle({
      layer: "flat",
    });
    return flat;
  };
