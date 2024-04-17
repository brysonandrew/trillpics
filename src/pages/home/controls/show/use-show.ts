import { useRef } from "react";
import { useVideoStore } from "@store/index";

export const useShow = () => {
  const {
    picsEntries,
    videoPics,
    countPics,
    updatePicsEntries,
    isPreviewOpen,
    isVideoMode,
  } = useVideoStore();

  const showAllIndexRef = useRef<
    number | null
  >(null);
  const videoPicsCount =
    videoPics.length;
  const isViewingOnlyVideoPics =
    videoPicsCount === countPics();

  const onToggleShow = () => {
    if (isViewingOnlyVideoPics) {
      updatePicsEntries(
        picsEntries[
          showAllIndexRef.current ?? 0
        ]
      );
      showAllIndexRef.current = null;
    } else {
      if (
        showAllIndexRef.current === null
      ) {
        showAllIndexRef.current =
          picsEntries.length - 1;
      }
      updatePicsEntries(videoPics);
    }
  };

  return {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
    isPreviewOpen,
    isVideoMode,
  };
};
