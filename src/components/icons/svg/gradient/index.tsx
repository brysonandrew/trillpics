import type { FC } from "react";
import { LINEAR_GRADIENT_SVG_ID } from "~app/color/gradient";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import {  IconsSvg,  TIconsSvgProps,} from "~/components/icons/svg";

export const IconsSvgGradient: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <IconsSvg
      size={24}
      viewBox="0 0 24 24"
      fill={resolveUrlId(
        LINEAR_GRADIENT_SVG_ID
      )}
      {...props}
    />
  );
};
