import type { FC } from "react";
import {
  TDimensions,
  TDivMotionProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLinesOptions } from "~/components/lines/types";
import { Lines_Line } from "~/components/lines/_line";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
import { THudContainer } from "~/pics/hud";

type TProps = TDivMotionProps &
  TLinesOptions & {
    container: THudContainer;
  };
export const LinesTopRight: FC<
  TProps
> = ({
  classValue,
  style,
  container,
  ...props
}) => {
  const rounded = boxRadius();
  
  return (
    <Lines_Line
      classValue={clsx(classValue)}
      sizeClass="hidden sm:flex relative border-r border-t w-full h-0 pointer-events-none"
      style={{
        borderTopRightRadius: rounded,
        top: 0,
        height: box.m,
        marginRight: box.m05,
        ...style,
      }}
      {...props}
    />
  );
};
