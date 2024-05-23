import type { FC } from "react";
import { IconsSvgGradient16vb24 } from "~/components/icons/svg/gradient/16vb24";

import { TIconsSvgProps } from "@brysonandrew/svg-icon";

export const IconsVideo: FC<
TIconsSvgProps
> = (props) => {
  return (
    <IconsSvgGradient16vb24
//    d="M3 3h18v18H3zm2 2v2h2V5zm4 0v6h6V5zm8 0v2h2V5zm2 4h-2v2h2zm0 4h-2v2h2zm0 4h-2v2h2zm-4 2v-6H9v6zm-8 0v-2H5v2zm-2-4h2v-2H5zm0-4h2V9H5z"

      d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"
      {...props}
    />
  );
};
