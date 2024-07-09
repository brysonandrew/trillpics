import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

export const IconsLoop: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2z"
      {...props}
    />
  );
};
