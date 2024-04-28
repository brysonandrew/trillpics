import { boxBackground } from "~/constants/box/class";
import { boxBorder } from "~/constants/box/style/border";
import { boxSize } from "~/constants/box/style/size";
import { TBoxStyleConfig } from "~/constants/box/style/types";
import {
  TBackgroundColorShortcut,
  TBackgroundImageShortcut,
} from "~uno/shortcuts/box/background";

type TConfig = {
  layer: "flat" | "floating";
  borderRadius?: "borderRadius";
  backgroundImage?: TBackgroundImageShortcut;
  backgroundColor?: TBackgroundColorShortcut;
  size?: keyof TBoxStyleConfig["size"];
};
export const boxStyle = ({
  layer,
  borderRadius,
  size,
  backgroundColor,
  backgroundImage,
}: TConfig) => {
  return {
    ...boxBackground({
      backgroundColor,
      backgroundImage,
    }),
    ...boxBorder({
      layer,
      borderRadius,
    }),
    ...boxSize,
    ...boxSize({ size }),
  };
};
export type TBoxStyle = ReturnType<
  typeof boxStyle
>;
