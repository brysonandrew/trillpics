import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

const PATH =
  "M4 5H2v14h14v-4h2v2h2v2h2V5h-2v2h-2v2h-2V5zm10 12H4V7h10zm-4-6H8V9H6v2h2v2H6v2h2v-2h2v2h2v-2h-2zm0 0V9h2v2z";
export const IconsVideoCross: FC<
  TSvgProps
> = (props) => (
  <IconsSvgGradient18vb24
    d={PATH}
    {...props}
  />
);
