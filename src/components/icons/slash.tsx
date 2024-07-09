import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient14vb24 } from "~/components/icons/svg/gradient/14vb24";

export const IconsSlash: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient14vb24
      d="m7 21l7.9-18H17L9.1 21z"
      fill="currentColor"
      {...props}
    />
  );
};
