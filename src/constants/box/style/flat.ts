import { boxStyle } from "~/constants/box/style";

export const boxStyleFlat =
  () => {
    const flat = boxStyle({
      layer: "flat",
      borderRadius: "XL",
    });
    return flat;
  };
