import type { FC } from "react";
import { TCell } from "~/shell/pics/columns/config";
import { Box } from "~/shell/pics/pic/box";
import { PicZoomed } from "~/shell/pics/pic/zoomed";
import { PicCell } from "~/shell/pics/pic/cell";
import { PicDirectorsModeCell } from "~/shell/pics/pic/directors-mode/cell";

export type TPicProps = {
  colIndex: number;
  cell: TCell;
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
