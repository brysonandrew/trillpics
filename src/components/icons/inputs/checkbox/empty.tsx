import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient40 } from "~/components/icons/svg/gradient/40";

export const IconsCheckboxEmpty: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient40
      viewBox="0 0 24 24"
      d="M3 3h18v18H3zm16 16V5H5v14z"
      {...props}
    />
  );
};
