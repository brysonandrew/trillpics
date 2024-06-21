import type { FC } from "react";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/18vb24";

import { TSvgProps } from "@brysonandrew/config-types";

export const IconsHide: FC<TSvgProps> = (
  props
) => {
  return (
    <IconsSvgGradient18vb24
      d="M8 6h8v2H8zm-4 4V8h4v2zm-2 2v-2h2v2zm0 2v-2H0v2zm2 2H2v-2h2zm4 2H4v-2h4zm8 0v2H8v-2zm4-2v2h-4v-2zm2-2v2h-2v-2zm0-2h2v2h-2zm-2-2h2v2h-2zm0 0V8h-4v2zM9 10h2v2H9zm4 2h-2v2H9v2h2v-2h2v2h2v-2h-2zm0 0v-2h2v2z"
      {...props}
    />
  );
};
