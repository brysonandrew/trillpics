import type { FC } from "react";
import { TCell } from "~/shell/pics/columns/config";
import { Box } from "~/shell/pics/pic/box";
import { PicZoomed } from "~/shell/pics/pic/zoomed";
import { PicCell } from "~/shell/pics/pic/cell";

export type TPicProps = {
  colIndex: number;
  cell: TCell;
  size: number;
  maxColsCount: number;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  return (
    <Box cursor="zoom-in" {...props}>
      {({
        isPicZoomed,
        ...boxChildProps
      }) => {
        const Child = isPicZoomed
          ? PicZoomed
          : PicCell;
        return (
          <Child {...boxChildProps} />
        );
      }}
    </Box>
  );
};
