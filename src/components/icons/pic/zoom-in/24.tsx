import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient16vb24 } from "~/components/icons/svg/gradient/16vb24";


export const IconsPicZoomIn24: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient16vb24
      d="M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4zM9 6h2v3h3v2h-3v3H9v-3H6V9h3z"
      {...props}
    />
  );
};
