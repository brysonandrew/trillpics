import { useVideoStore } from "@store/index";
import { useRef } from "react";

export const useShow = () => {
  const {
    picsEntries,
    videoPics,
    countPics,
    updatePicsEntries,
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
  };
};
