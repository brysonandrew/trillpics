import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient24 } from "@/components/icons/svg/gradient/24";
export const ICON_SHUFFLE =
  "M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2zM2 9h6v2H2zm20 10v-2h-8v2z";
export const IconsShuffle: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d={ICON_SHUFFLE}
      {...props}
    />
  );
};
