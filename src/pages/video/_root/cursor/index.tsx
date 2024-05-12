import type { FC } from "react";
import { PicVideoControls } from "~/pages/video/_common/pic/controls";
import { AddRemoveIcon } from "~/pages/video/_common/pic/controls/add-remove-icon";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useTrillPicsStore } from "~/store/middleware";
import { Video_RootCursorSelected } from "~/pages/video/_root/cursor/selected";
import { useClickVideo } from "~/context/hooks/click/video";
import { useMove } from "~/context/hooks/move";
import { usePicVideo } from "~/hooks/pic/video";

export const Video_RootCursor: FC =
  () => {
    const props = usePicVideo();
    const {
      isControls,
      isScrolling,
      hoverDoneCheck,
    } = useTrillPicsStore(
      ({
        isControls,
        isScrolling,
        hoverDoneCheck,
      }) => ({
        isControls,
        isScrolling,
        hoverDoneCheck,
      })
    );
    useClickVideo(props.toggle);
    useMove();

    const { isCurrAdded, isCurrName } =
      props;
    const isSelectedVisible =
      isControls &&
      !isScrolling &&
      hoverDoneCheck();
    const title = isCurrName
      ? isCurrAdded
        ? "remove"
        : "add"
      : "";

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
              <PicVideoControls
                {...props}
              >
                {title}
              </PicVideoControls>
            </header>
          </div>
        </PicCursor>
      </>
    );
  };
