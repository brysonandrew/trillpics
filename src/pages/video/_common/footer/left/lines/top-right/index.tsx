import type { FC } from "react";
import { TDimensions, TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLineProps } from "~/pages/video/_common/footer/left/lines/types";
import { Lines_Line } from "~/pages/video/_common/footer/left/lines/_line";
import { boxRadius } from "~/constants/box/radius";
import { boxSize } from "~/constants/box/size";

type TProps = TDivMotionProps & TLineProps & {dimensions:TDimensions};
export const LinesTopRight: FC<
  TProps
> = ({
  classValue,
  style,
  dimensions,
  ...props
}) => {
  const rounded = boxRadius();
  const bSize = boxSize();
  const top = dimensions.height/8+ bSize.m025/2
  const height = dimensions.height/4+ bSize.m025;
  return (
    <Lines_Line
      classValue={clsx(
        classValue
      )}
      sizeClass="border-r border-t w-full"
      style={{
        borderTopRightRadius: rounded,
        top,
        height, 
        marginRight: bSize.m05,
        ...style,
      } as any}
      {...props}
    />
  );
};
