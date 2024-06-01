import {
  TBoxBackgroundColorConfig,
  boxBackgroundColor,
} from "./background/color";

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
    ...(backgroundColor
      ? { backgroundColor }
      : {}),
    ...(backgroundImage
      ? { backgroundImage }
      : {}),
  };
};
export type TBoxBackground = ReturnType<
  typeof boxBackground
>;
