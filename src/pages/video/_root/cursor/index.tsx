import type { FC } from "react";
import { AddRemoveIcon } from "~/pages/video/_common/pic/controls/add-remove-icon";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useTrillPicsStore } from "~/store/middleware";
import { Video_RootCursorSelected } from "~/pages/video/_root/cursor/selected";
import { useContextGrid } from "~/context";
import { useVideoClickSelect } from "~/pages/video/select";
import { _CommonReorder } from "~/pages/video/_common/reorder";
import { boxRadius } from "~/constants/box/radius";

export const Video_RootCursor: FC =
  () => {
    const { main } = useContextGrid();
    const props = useVideoClickSelect();
    const {
      isControls,
      isScrolling,
      isActiveHover,
    } = useTrillPicsStore(
      ({
        isControls,
        isScrolling,
        isActiveHover,
      }) => ({
        isControls,
        isScrolling,
        isActiveHover,
      })
    );

    return (
      <>
        <PicCursor>
          <AddRemoveIcon
            isAdded={props.isAdded}
          />
        </PicCursor>
        <footer className="h-0 w-full">
          <_CommonReorder {...props} />
        </footer>
      </>
    );
  };
