import type { FC } from "react";
import { Box } from "~/shell/pics/pic/box";
import { PicZoomed } from "~/shell/pics/pic/zoomed";
import { PicCell } from "~/shell/pics/pic/cell";
import { TPic } from "~/store/state/pics/types";
import { TCursorCell } from "~/shell/pics/virtualize/context";

export type TPicProps = TCursorCell & {
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
