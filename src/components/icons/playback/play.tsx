import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types/dom";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~/components/gradients/blue-pink-yellow";
import { IconsSvgGradient } from "~/components/icons/svg/gradient";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { IconsSvgGradient160 } from "~/components/icons/svg/gradient/160";
export const ICONS_PLAY =
  "M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z";

export const IconsPlayLarge: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient160
      d={ICONS_PLAY}
      {...props}
    />
  );
};
export const IconsPlay: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d={ICONS_PLAY}
      {...props}
    />
  );
};
