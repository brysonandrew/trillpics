import { TSvgProps } from "@brysonandrew/config-types";
import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";


export const IconsHome: FC<TSvgProps> = (props) => {
  return (
    <IconsSvgGradient18vb24 d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4z"
    {...props} />
  );
};
