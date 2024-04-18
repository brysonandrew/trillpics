import type { FC } from "react";
import { TIconsSvgProps } from "@/components/icons/svg";
import { IconsSvgGradient24 } from "@/components/icons/svg/gradient/24";

export const IconsGenerate: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d="M7 7h4v4H7zm-2 6v-2h2v2zm0 0v4H1v-4zm8 0h-2v-2h2zm4 0h-4v4h4zm2-2v2h-2v-2zm0 0h4V7h-4z"
      {...props}
    />
  );
};
