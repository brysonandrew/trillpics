import type { FC } from "react";
import { TIconsSvgProps } from "~/components/icons/svg";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";


export const IconsPause: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M10 4H5v16h5zm9 0h-5v16h5z"
      {...props}
    />
  );
};
