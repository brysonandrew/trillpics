import type { FC } from "react";
import { AddRemoveIcon } from "~/pages/video/_common/pic/controls/add-remove-icon";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useTrillPicsStore } from "~/store/middleware";
import { Video_RootCursorSelected } from "~/pages/video/_root/cursor/selected";
import { useContextGrid } from "~/context";
import { useClickSelect } from "~/context/hooks/click/select";
import { _CommonReorder } from "~/pages/video/_common/reorder";

export const Video_RootCursor: FC =
  () => {
    const { main } = useContextGrid();
    const props = useClickSelect();

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

    const isSelectedVisible =
      !main.cursor.isHoverIdle &&
      isControls &&
      !isScrolling &&
      !isActiveHover;
    return (
      <>
        {isSelectedVisible && (
          <Video_RootCursorSelected
            {...props}
          />
        )}
        <PicCursor>
          <div className="fill center">
            <header className="row gap-4">
              <AddRemoveIcon
                isAdded={props.isAdded}
              />
            </header>
          </div>
        </PicCursor>
        <footer className="h-0 w-full">
          <_CommonReorder {...props} />
        </footer>
      </>
    );
  };
