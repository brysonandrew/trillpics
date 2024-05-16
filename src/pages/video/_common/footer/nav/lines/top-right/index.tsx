import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLineProps } from "~/pages/video/_common/footer/nav/lines/types";
import { Lines_Line } from "~/pages/video/_common/footer/nav/lines/_line";
import { boxRadius } from "~/constants/box/radius";
import { boxSize } from "~/constants/box/size";

type TProps = TDivProps & TLineProps;
export const LinesTopRight: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  const rounded = boxRadius("xl");
  const bSize = boxSize();
  return (
    <Lines_Line
      className={clsx(
        "border-r border-t h-full w-full translate-y-1/2",
        classValue
      )}
      style={{
        borderTopRightRadius: rounded,
        height: bSize.s,
        marginRight: bSize.s05,
        ...style,
      }}
      {...props}
    />
  );
};
