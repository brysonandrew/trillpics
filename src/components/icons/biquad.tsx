import type {
  FC,
  SVGAttributes,
} from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

type TProps = TIconsSvgProps & {
  classValue?: ClassValue;
};
export const IconsBiquad: FC<
  TProps
> = ({ classValue, ...props }) => (
  <IconsSvgGradient24
    className={clsx(classValue)}
    d="M7 3H5V9H7V3M19 3H17V13H19V3M3 13H5V21H7V13H9V11H3V13M15 7H13V3H11V7H9V9H15V7M11 21H13V11H11V21M15 15V17H17V21H19V17H21V15H15Z"
    {...props}
  />
);
