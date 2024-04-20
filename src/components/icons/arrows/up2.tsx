import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";

export const IconsArrowsUp2: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d="M4 6h16V4H4zm7 14h2v-8h2v2h2v-2h-2v-2h-2V8h-2v2H9v2H7v2h2v-2h2z"
      {...props}
    />
  );
};
