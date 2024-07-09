import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

export const ICON_SHUFFLE =
  "M3 5V3h2v2zm4 2H5V5h2zm2 2H7V7h2zm2 2H9V9h2zm2 0h-2v2h2v2h2v2h2v2h-2v2h6v-6h-2v2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0-2v2h2v2h2V3h-6v2zM5 19v-2h2v2zm0 0v2H3v-2zm2-2v-2h2v2z";
//  "M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2zM2 9h6v2H2zm20 10v-2h-8v2z";
export const IconsShuffle: FC<
TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d={ICON_SHUFFLE}
      {...props}
    />
  );
};
