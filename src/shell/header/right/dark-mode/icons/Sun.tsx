import { FC } from "react";
import {
  motion,
  SVGMotionProps,
} from "framer-motion";
import { ClassValue } from "clsx";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";

type TProps =
  SVGMotionProps<SVGSVGElement> & {
    classValue?: ClassValue;
  };
export const Sun: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="26px"
    height="26px"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
     fill={resolveUrlId(
       LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
     )}
      d="M13 0h-2v4h2zM0 11v2h4v-2zm24 0v2h-4v-2zM13 24h-2v-4h2zM8 6h8v2H8zM6 8h2v8H6zm2 10v-2h8v2zm10-2h-2V8h2zm2-14h2v2h-2zm0 2v2h-2V4zm2 18h-2v-2h2zm-2-2h-2v-2h2zM4 2H2v2h2v2h2V4H4zM2 22h2v-2h2v-2H4v2H2z"
    />
  </motion.svg>
);
