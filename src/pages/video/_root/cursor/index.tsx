import type { FC } from "react";
import { PicVideoControls } from "~/pages/video/_common/pic/controls";
import { AddRemoveToVideoMarker } from "~/pages/video/_common/pic/controls/add-remove-to-video-marker";
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
      hoverKeys,
      hoverKeyCooldown,
    } = useTrillPicsStore(
      ({
        isControls,
        isScrolling,
        hoverKeys,
        hoverKeyCooldown,
      }) => ({
        isControls,
        isScrolling,
        hoverKeys,
        hoverKeyCooldown,
      })
    );
    useClickVideo(props.toggle);
    useMove();

    const { isCurrAdded, isCurrName } =
      props;
    const isHoverKey =
      Boolean(hoverKeyCooldown) ||
      hoverKeys.length > 0;
    return (
      <>
        {isControls &&
          !isScrolling &&
          !isHoverKey && (
            <Video_RootCursorSelected
              {...props}
            />
          )}
        <PicCursor
          title={
            isCurrName
              ? isCurrAdded
                ? "remove"
                : "add"
              : ""
          }
        >
          <div className="fill center">
            <AddRemoveToVideoMarker
              isAdded={isCurrAdded}
            />
            <PicVideoControls
              {...props}
            />
          </div>
        </PicCursor>
      </>
    );
  };
