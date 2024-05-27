import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient18vb240 } from "~/components/icons/svg/gradient/160";

export const IconsLoader: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient18vb240
      d="M13 2h-2v6h2zm0 14h-2v6h2zm9-5v2h-6v-2zM8 13v-2H2v2zm7-6h2v2h-2zm4-2h-2v2h2zM9 7H7v2h2zM5 5h2v2H5zm10 12h2v2h2v-2h-2v-2h-2zm-8 0v-2h2v2zv2H5v-2z"
      {...props}
    />
  );
};
