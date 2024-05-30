import { FC } from "react";
import { ClassValue } from "clsx";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/init/svg/gradients/blue-pink-yellow";
import { TSvgProps } from "@brysonandrew/config-types";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";


type TProps = TSvgProps & {
  classValue?: ClassValue;
};
export const Sun: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <IconsSvgGradient18vb24
    d="M13 0h-2v4h2zM0 11v2h4v-2zm24 0v2h-4v-2zM13 24h-2v-4h2zM8 6h8v2H8zM6 8h2v8H6zm2 10v-2h8v2zm10-2h-2V8h2zm2-14h2v2h-2zm0 2v2h-2V4zm2 18h-2v-2h2zm-2-2h-2v-2h2zM4 2H2v2h2v2h2V4H4zM2 22h2v-2h2v-2H4v2H2z"
    stroke="white"
    strokeWidth={0.1}
    fill={resolveUrlId(
      LINEAR_GRADIENT_SVG_ID
    )}
    {...props}
  />
);
