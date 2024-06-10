import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";

export const CHEVRON_DOWN =
  "M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7z";
export const IconsChevronsDown: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d={CHEVRON_DOWN}
      {...props}
    />
  );
};
