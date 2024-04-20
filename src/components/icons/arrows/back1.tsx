import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient40 } from "~/components/icons/svg/gradient/40";

export const IconsBack1: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient40
      d="M11 7h10v2H11zm-8 4h2V9h2v2h14v2H7v2H5v-2H3zm4 4v2h2v-2zm0-6V7h2v2zm14 6H11v2h10z"
      {...props}
    />
  );
};
