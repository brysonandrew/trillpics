import {
  TBoxBackgroundColorConfig,
  boxBackgroundColor,
} from "~/constants/box/border/class/background/color";
import {
  TBoxBackgroundImageConfig,
  boxBackgroundImage,
} from "~/constants/box/border/class/background/image";

type TBoxBackgroundConfig =
  TBoxBackgroundColorConfig &
    TBoxBackgroundImageConfig;

export const boxBackground = (
  config: TBoxBackgroundConfig
) => {
  const backgroundColor =
    boxBackgroundColor(config);
  const backgroundImage =
    boxBackgroundImage(config);
  return {
    backgroundColor,
    backgroundImage,
  };
};
export type TBoxBackground =
  ReturnType<typeof boxBackground>;
