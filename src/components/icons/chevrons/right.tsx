import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient24 } from "@/components/icons/svg/gradient/24";
export const CHEVRON_RIGHT =
  "M8 5v2h2V5zm4 4V7h-2v2zm2 2V9h-2v2zm0 2h2v-2h-2zm-2 2v-2h2v2zm0 0h-2v2h2zm-4 4v-2h2v2z";
export const IconsChevronsRight: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d={CHEVRON_RIGHT}
      {...props}
    />
  );
};
