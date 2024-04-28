import type { FC } from "react";
import { Box } from "~/shell/pics/pic/box";
import { PicZoomed } from "~/shell/pics/pic/zoomed";
import { PicCell } from "~/shell/pics/pic/cell";
import { TPicCell } from "~/store/slices/table/types";

export type TPicProps = {
  colIndex: number;
  cell: TPicCell;
  size: number;
  maxColsCount: number;
};
export const PicBase: FC<TPicProps> = (
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
