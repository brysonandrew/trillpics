import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient40 } from "@/components/icons/svg/gradient/40";

export const IconsInfo: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient40
      d="M3 3h2v18H3zm16 0H5v2h14v14H5v2h16V3zm-8 6h2V7h-2zm2 8h-2v-6h2z"
      {...props}
    />
  );
};
