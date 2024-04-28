import { BOX } from "~/constants/box";
import { TBackgroundColorShortcut } from "~uno/shortcuts/box/background";

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
