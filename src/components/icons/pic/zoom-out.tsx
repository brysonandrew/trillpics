import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient28 } from "~/components/icons/svg/gradient/28";

export const IconsPicZoomOut: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient28
      d="M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4zm0 5v2H6V9z"
      {...props}
    />
  );
};
