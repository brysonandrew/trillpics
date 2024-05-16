import { FC } from "react";
import { SVGMotionProps } from "framer-motion";
import { ClassValue } from "clsx";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { resolveSquare } from "@brysonandrew/measure";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { TSvgMotionProps, TSvgProps } from "@brysonandrew/config-types";

type TProps =
  TSvgProps & {
    classValue?: ClassValue;
  };
export const Moon: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <IconsSvgGradient24
    d="M6 2h8v2h-2v2h-2V4H6zM4 6V4h2v2zm0 10H2V6h2zm2 2H4v-2h2zm2 2H6v-2h2zm10 0v2H8v-2zm2-2v2h-2v-2zm-2-4h2v4h2v-8h-2v2h-2zm-6 0v2h6v-2zm-2-2h2v2h-2zm0 0V6H8v6z"
    stroke="white"
    strokeWidth={0.1}
    fill={resolveUrlId(
      LINEAR_GRADIENT_SVG_ID
    )}
    {...props}
  />
);
