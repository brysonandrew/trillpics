import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";
import { TSvgProps } from "@brysonandrew/config-types";

export const IconsTick: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M18 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2h2v-2h-2zm-2 2h2v-2h-2zm-2 0v2h2v-2zm-2-2h2v2H6zm0 0H4v-2h2z"
      {...props}
    />
  );
};
