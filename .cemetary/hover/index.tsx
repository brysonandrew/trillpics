import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { Floating } from "~/pics/grid/pic/floating";
import { TCell } from "~/pics/grid/pic";
import { usePicCell } from "~/pics/grid/pic/hooks/cell";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";

export type TPicHoverProps = TCell;
export const PicHover: FC<
  TPicHoverProps
> = ({ column, row }) => {
  const { isControls } =
    useTrillPicsStore(
      ({ isControls }) => ({
        isControls,
      })
    );
  const { isCursorOverCell } =
    usePicCell();

  return (
    <>
      {isControls &&
        isCursorOverCell?.({
          column,
          row,
        }) && (
          <Floating>
            <IconsPicZoomIn24 />
          </Floating>
        )}
    </>
  );
};
