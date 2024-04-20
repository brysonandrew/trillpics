import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
export const CHEVRON_LEFT =
  "M16 5v2h-2V5zm-4 4V7h2v2zm-2 2V9h2v2zm0 2H8v-2h2zm2 2v-2h-2v2zm0 0h2v2h-2zm4 4v-2h-2v2z";
export const IconsChevronsLeft: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d={CHEVRON_LEFT}
      {...props}
    />
  );
};
