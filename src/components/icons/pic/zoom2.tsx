import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";

import { TSvgProps } from "@brysonandrew/config-types";

export const IconsPicZoom2: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M21 3h-8v2h4v2h2v4h2zm-4 4h-2v2h-2v2h2V9h2zm-8 8h2v-2H9zH7v2h2zm-4-2v4h2v2H5h6v2H3v-8z"
      {...props}
    />
  );
};
