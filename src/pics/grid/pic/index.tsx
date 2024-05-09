import type { FC } from "react";
import { Box } from "~/pics/grid/pic/box";
import { PicZoomed } from "~/pics/grid/pic/zoomed";
import { TPic } from "~/store/state/pics/types";
import { usePicZoom } from "~/pics/grid/pic/hooks/zoom";
import { PicDisplayCell } from "~/pics/grid/pic/cell";

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
  const {
    isCellZoomed,
    isCellClosing,
    reset,
  } = usePicZoom(props);
  return (
    <Box cursor="zoom-in" {...props}>
      {(boxChildProps) => {
        if (isCellZoomed)
          return (
            <PicZoomed
              {...boxChildProps}
            />
          );
        return (
          <PicDisplayCell
            isCellClosing={
              isCellClosing
            }
            reset={reset}
            {...boxChildProps}
          />
        );
      }}
    </Box>
  );
};
