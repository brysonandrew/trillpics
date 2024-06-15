import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";

export const CHEVRON_UP =
  "M7 16H5v-2h2v-2h2v-2h2V8h2v2h2v2h2v2h2v2h-2v-2h-2v-2h-2v-2h-2v2H9v2H7z";
export const IconsChevronsUp: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d={CHEVRON_UP}
      {...props}
    />
  );
};
