import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient40 } from "~/components/icons/svg/gradient/40";

export const IconsCheckboxChecked: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient40
      d="M5 3H3v18h18V3zm0 2h14v14H5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9z"
      {...props}
    />
  );
};
