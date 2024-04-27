import type { FC } from "react";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { TSvgProps } from "@brysonandrew/config-types";

export const IconsRedo: FC<
  TSvgProps
> = (props) => {
  return (
    <IconsSvgGradient24
      d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2z"
      {...props}
    />
  );
};
