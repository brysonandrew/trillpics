import { TSvgProps } from "@brysonandrew/config-types";
import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";


export const IconsEdit: FC<TSvgProps> = (props) => {
  return (
    <IconsSvgGradient18vb24
    d="M18 2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2H2v6h6v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h-2V4h-2zm0 8h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2v-2h2V8h2V6h2v2h2zM6 16H4v4h4v-2H6z"
    {...props} />
  );
};