import type { FC } from "react";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";

export const IconsCheckboxChecked: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      size={24}
      viewBox="0 0 24 24"
      d="M5 3H3v18h18V3zm0 2h14v14H5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9z"
      {...props}
    />
  );
};
