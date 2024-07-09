import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

export const IconsMovie: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M3 3h18v18H3zm2 2v2h2V5zm4 0v6h6V5zm8 0v2h2V5zm2 4h-2v2h2zm0 4h-2v2h2zm0 4h-2v2h2zm-4 2v-6H9v6zm-8 0v-2H5v2zm-2-4h2v-2H5zm0-4h2V9H5z"
      {...props}
    />
  );
};
