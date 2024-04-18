import { IconsSvgGradient24 } from "@/components/icons/svg/gradient/24";
import { TSvgProps } from "@brysonandrew/config-types";
import type { FC } from "react";

export const IconsPicZoom: FC<TSvgProps> = (props) => {
  return (
    <IconsSvgGradient24 
    d="M6 2h8v2H6zM4 6V4h2v2zm0 8H2V6h2zm2 2H4v-2h2zm8 0v2H6v-2zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm0-8h2v8h-2zm0 0V4h-2v2z"
    {...props}
    />
  );
};
