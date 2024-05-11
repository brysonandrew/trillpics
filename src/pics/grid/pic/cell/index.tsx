import type { FC } from "react";
import {
  PicDisplay,
  TPicDisplayProps,
} from "~/pics/grid/pic/display";
import { TBoxChildProps } from "~/pics/grid/pic/box";
import { TCell } from "~/pics/grid/pic";

export const PicDisplayCell: FC<
  TPicDisplayProps &
    TCell &
    TBoxChildProps
> = ({
  style,
  column,
  row,
  ...props
}) => {
  return (
    <PicDisplay
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        ...style,
      }}
      {...props}
    />
  );
};
