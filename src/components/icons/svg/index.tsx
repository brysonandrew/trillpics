import type {
  FC,
  SVGAttributes,
} from "react";
import { resolveSquare } from "@brysonandrew/measure";
import {
  TClassValueProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";

export type TIconsSvgProps = Omit<
  TSvgProps,
  "fill" | "d"
> &
  TClassValueProps & {
    svgProps?: TSvgProps;
    pathProps?: SVGAttributes<SVGPathElement>;
    size?: number;
    fill?: string;
    d?: string;
    children?: any
  };
export const IconsSvg: FC<
  TIconsSvgProps
> = ({
  svgProps,
  pathProps,
  className,
  classValue,
  size,
  fill,
  d,
  children,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'relative shrink-0',
        className,
        classValue
      )}
      {...resolveSquare(size ?? 24)}
      viewBox="0 0 24 24"
      {...svgProps}
      {...props}
    >
      <path
        d={d}
        fill={fill}
        {...pathProps}
      />

      {children}
    </svg>
  );
};
