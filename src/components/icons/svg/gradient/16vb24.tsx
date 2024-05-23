import type { FC } from "react";
import { TIconsSvgProps } from "~/components/icons/svg";
import { IconsSvgGradient } from "~/components/icons/svg/gradient";

export const IconsSvgGradient16vb24: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient
      size={16}
      viewBox="0 0 24 24"
      {...props}
    />
  );
};
