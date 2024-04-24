import { useRef } from "react";
import { animate } from "framer-motion";
import { useScroll } from "~/context/scroll";
import { useVideoStore } from "~/store/index";

export const useShow = () => {
  const {
    picsEntries,
    videoPics,
    countPics,
    updatePicsEntries,
    isPlayerOpen,
  } = useVideoStore();
  const showAllIndexRef = useRef<
    number | null
  >(null);
  const videoPicsCount =
    videoPics.length;
  const isViewingOnlyVideoPics =
    videoPicsCount === countPics();
  const { blurX, blurXRef } =
    useScroll();
  const onToggleShow = () => {
    const prev = blurX.get();
    blurXRef.current = animate(
      blurX,
      100,
      {
        // type: "spring",
        // duration: 1,
        type: "tween",
        onComplete: () =>
          blurX.set(prev),
      }
    );
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
    isPlayerOpen,
  };
};
