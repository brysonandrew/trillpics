import { BOX } from "~/constants/box/border";
import { TBackgroundColorShortcut } from "~uno/rules/box/background";

export type TBoxBackgroundColorConfig =
  {
    backgroundColor?: TBackgroundColorShortcut;
  };
export const boxBackgroundColor = ({
  backgroundColor,
}: TBoxBackgroundColorConfig) => {
  const box = BOX;
  return backgroundColor
    ? box.backgroundColor[
        backgroundColor
      ]
    : null;
};
export type TBoxBackgroundColor =
  ReturnType<
    typeof boxBackgroundColor
  >;
