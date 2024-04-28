import type { FC } from "react";
import { Box } from "~/shell/pics/pic/box";
import { PicZoomed } from "~/shell/pics/pic/zoomed";
import { PicDirectorsModeCell } from "~/shell/pics/pic/directors-mode/cell";
import { TPicCell } from "~/store/slices/table/types";

export type TPicProps = {
  colIndex: number;
  cell: TPicCell;
  size: number;
  maxColsCount: number;
};
export const PicDirectorsMode: FC<
  TPicProps
> = (props) => {
  return (
    <Box cursor="pointer" {...props}>
      {({
        isPicZoomed,
        ...boxChildProps
      }) => {
        const Child = isPicZoomed
          ? PicZoomed
          : PicDirectorsModeCell;
        return (
          <Child {...boxChildProps} />
        );
      }}
    </Box>
  );
};
