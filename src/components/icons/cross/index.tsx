import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient16vb24 } from "~/components/icons/svg/gradient/16vb24";

export const ICONS_CROSS =
  "M7 3H3v4h4zm0 14H3v4h4zM17 3h4v4h-4zm4 14h-4v4h4zM8 8h2v2H8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2z";
export const IconsCross: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient16vb24
      d={ICONS_CROSS}
      {...props}
    />
  );
};
