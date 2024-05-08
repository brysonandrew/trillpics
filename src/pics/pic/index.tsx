import type { FC } from "react";
import { Box } from "~/pics/pic/box";
import { PicZoomed } from "~/pics/pic/zoomed";
import { PicCell } from "~/pics/pic/cell";
import { TPic } from "~/store/state/pics/types";

export type TCell = {
  row: number;
  column: number;
};
export type TPicProps = TCell & {
  name: TPic;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  return (
    <>
      <Box cursor="zoom-in" {...props}>
        {(
          boxChildProps,
          isPicZoomed
        ) => {
          const Child = isPicZoomed
            ? PicZoomed
            : PicCell;
          return (
            <Child {...boxChildProps} />
          );
        }}
      </Box>
    </>
  );
};
