import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

import { TSvgProps } from "@brysonandrew/config-types";

export const IconsUndo: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb24
      d="M8 4h2v2H8zm10 6V8H8V6H6v2H4v2h2v2h2v2h2v-2H8v-2zm0 8v-8h2v8zm0 0v2h-6v-2z"
      {...props}
    />
  );
};
