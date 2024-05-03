import { boxBackground } from "~/constants/box/class";
import { boxBorder } from "~/constants/box/style/border";
import { TBoxRadiusKey } from "~/constants/box/style/radius";
import { boxSize } from "~/constants/box/style/size";
import { TBoxStyleTheme } from "~/constants/box/style/types";
import {
  TBackgroundColorShortcut,
  TBackgroundImageShortcut,
} from "~uno/shortcuts/box/background";

export type TBoxStyleConfig = {
  layer: "flat" | "floating";
  borderRadius?: TBoxRadiusKey;
  backgroundImage?: TBackgroundImageShortcut;
  backgroundColor?: TBackgroundColorShortcut;
  size?: keyof TBoxStyleTheme["size"];
};
export const boxStyle = ({
  layer,
  borderRadius,
  size,
  backgroundColor,
  backgroundImage,
}: TBoxStyleConfig) => {
  return {
    ...boxBackground({
      backgroundColor,
      backgroundImage,
    }),
    ...boxBorder({
      layer,
      borderRadius
    }),
    ...boxSize({ size }),
  };
};
export type TBoxStyle = ReturnType<
  typeof boxStyle
>;
