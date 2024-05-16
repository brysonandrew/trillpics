import type { FC } from "react";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

export const IconsVideo: FC<
TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"
      {...props}
    />
  );
};
