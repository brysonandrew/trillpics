import type { FC } from "react";
import { TIconsSvgProps } from "~/components/icons/svg";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";


export const IconsPause24: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d="M10 4H5v16h5zm9 0h-5v16h5z"
      {...props}
    />
  );
};
