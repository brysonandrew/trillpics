import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient40 } from "~/components/icons/svg/gradient/40";

export const IconsOpen40: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient40
      d="M5 3h6v2H5v14h14v-6h2v8H3V3zm8 0h8v8h-2V7h-2V5h-4zm0 8h-2v2H9v2h2v-2h2zm4-4h-2v2h-2v2h2V9h2z"
      {...props}
    />
  );
};
