import type { FC } from "react";
import { Box } from "~/shell/pics/pic/box";
import { PicZoomed } from "~/shell/pics/pic/zoomed";
import { PicCell } from "~/shell/pics/pic/cell";
import { useHover } from "~/shell/pics/pic/use-hover";
import { TPic } from "~/store/state/pics/types";

export type TPicProps = {
  name: TPic;
  columnIndex: number;
  rowIndex: number;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  const hover = useHover(props);
  return (
    <>
    <Box
      cursor="zoom-in"
      {...props}
      {...hover}
    >
      {(boxChildProps, isPicZoomed) => {
        const Child = isPicZoomed
          ? PicZoomed
          : PicCell;
        return (
          <Child
            {...boxChildProps}
            {...hover}
          />
        );
      }}
    </Box>
    </>
  );
};
