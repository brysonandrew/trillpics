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
  const top =
    dimensions.height / 8 + s.m05 + 1;
  const height =
    dimensions.height / 3 - s.m05;
  return (
    <Lines_Line
      classValue={clsx(classValue)}
      sizeClass="border-r border-t w-full pointer-events-none"
      style={
        {
          borderTopRightRadius: rounded,
          top,
          height,
          marginRight: s.m05,
          ...style,
        } 
      }
      {...props}
    />
  );
};
