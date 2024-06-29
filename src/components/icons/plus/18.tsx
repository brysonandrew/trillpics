import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

export const IconsPlus18: FC<
  TSvgProps
> = ({ children, ...props }) => {
  return (
    <IconsSvgGradient18vb24
      d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z"
      {...props}
    >
      {children}
    </IconsSvgGradient18vb24>
  );
};

