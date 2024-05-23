import { boxBackground } from "~/constants/box/class";
import { boxBorder } from "~/constants/box/border/border";
import { boxRadius, TBoxRadiusKey } from "~/constants/box/radius";
import {
  boxSize,
} from "~/constants/box/size";
import {
  TBackgroundColorShortcut,
  TBackgroundImageShortcut,
} from "~uno/shortcuts/box/background";
import { TBoxSizesKey } from "~/constants/box/size/constants";

export type TBoxStyleConfig = {
  layer: "flat" | "floating";
  borderRadius?: TBoxRadiusKey;
  backgroundImage?: TBackgroundImageShortcut;
  backgroundColor?: TBackgroundColorShortcut;
  size?: TBoxSizesKey;
};
export const boxStyle = ({
  layer,
  borderRadius,
  size = 'm',
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
      borderRadius,
    }),
    borderRadius:boxRadius(),
    ...boxSize(size),
  };
};
export type TBoxStyle = ReturnType<
  typeof boxStyle
>;
