import type { FC } from "react";
import { AddRemoveIcon } from "~/pages/video/_common/pic/controls/add-remove-icon";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useTrillPicsStore } from "~/store/middleware";
import { Video_RootCursorSelected } from "~/pages/video/_root/cursor/selected";
import { useClickVideo } from "~/context/hooks/click/video";
import { usePicVideo } from "~/hooks/pic/video";
import { useContextGrid } from "~/context";

// const {
//   addedCheck,
//   removingCheck,
//   clearRemoving,
// } = usePicVideo();
// const isAdded = addedCheck(name);
// const isRemoving =
//   removingCheck(name);

export const Video_RootCursor: FC =
  () => {
    const { main } = useContextGrid();
    const props = usePicVideo();
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
    useClickVideo(props.toggle);
    const { isCurrAdded, isCurrName } =
      props;
    const isSelectedVisible =
      !main.cursor.isHoverIdle &&
      isControls &&
      !isScrolling &&
      !isActiveHover;
    // const title = isCurrName
    //   ? isCurrAdded
    //     ? "Remove from video"
    //     : "Add to video"
    //   : "";

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
                isAdded={isCurrAdded}
              />
            </header>
          </div>
        </PicCursor>
      </>
    );
  };
