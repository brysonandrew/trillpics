import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types/dom";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";

import { IconsSvgGradient18vb240 } from "~/components/icons/svg/gradient/160";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
export const ICONS_PLAY =
  "M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z";

export const IconsPlayLarge: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb240
      d={ICONS_PLAY}
      {...props}
    />
  );
};
export const IconsPlay: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d={ICONS_PLAY}
      {...props}
    />
  );
};
