import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

export const IconsAlert: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3zm0 4h-2v6h2zm0 8h-2v2h2z"
      {...props}
    />
  );
};
