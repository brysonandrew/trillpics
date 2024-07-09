import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

export const IconsMenu: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M4 6h16v2H4zm0 5h16v2H4zm16 5H4v2h16z"
      {...props}
    />
  );
};
