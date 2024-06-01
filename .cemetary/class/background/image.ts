import { BOX } from "~/constants/box/border";
import { TBackgroundImageShortcut } from "~uno/rules/box/background";

export type TBoxBackgroundImageConfig =
  {
    backgroundImage?: TBackgroundImageShortcut;
  };
export const boxBackgroundImage = ({
  backgroundImage,
}: TBoxBackgroundImageConfig) => {
  const box = BOX;
  return backgroundImage
    ? box.backgroundImage[
        backgroundImage
      ]
    : null;
};
export type TBoxBackgroundImage =
  ReturnType<
    typeof boxBackgroundImage
  >;
