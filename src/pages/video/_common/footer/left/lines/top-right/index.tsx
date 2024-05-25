import type { FC } from "react";
import {
  TDimensions,
  TDivMotionProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLinesOptions } from "~/pages/video/_common/footer/left/lines/types";
import { Lines_Line } from "~/pages/video/_common/footer/left/lines/_line";
import { boxRadius } from "~/constants/box/radius";
import { boxSize } from "~/constants/box/size";

type TProps = TDivMotionProps &
  TLinesOptions & {
    dimensions: TDimensions;
  };
export const LinesTopRight: FC<
  TProps
> = ({
  classValue,
  style,
  dimensions,
  ...props
}) => {
  const rounded = boxRadius();
  const s = boxSize();
  return (
    <Lines_Line
      classValue={clsx(classValue)}
      sizeClass="hidden sm:flex relative border-r border-t w-full h-0 pointer-events-none"
      style={{
        borderTopRightRadius: rounded,
        top: 0,
        height: s.m,
        marginRight: s.m05,
        ...style,
      }}
      {...props}
    />
  );
};
