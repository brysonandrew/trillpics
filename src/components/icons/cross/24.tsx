import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

export const IconsCross24: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"
      {...props}
    />
  );
};
