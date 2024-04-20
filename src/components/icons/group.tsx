import type { FC } from "react";
import { IconsSvgGradient } from "~/components/icons/svg/gradient";

export const IconsGroup: FC = (props) => {
  return (
    <IconsSvgGradient
      d="M3 3h18v18H3zm2 2v14h14V5zm2 2h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z"
      {...props}
    />
  );
};
