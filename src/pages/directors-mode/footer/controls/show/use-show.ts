import { useRef } from "react";
import { animate } from "framer-motion";
import { useScroll } from "~/context/scroll";
import { useTrillPicsStore } from "~/store/index";

export const useShow = () => {
  const {
    picsEntries,
    videoPics,
    countPics,
    countVideoPics,
    updatePicsEntries,
  } = useTrillPicsStore(
    ({
      picsEntries,
      videoPics,
      countPics,
      countVideoPics,
      updatePicsEntries,
    }) => ({
      picsEntries,
      videoPics,
      countPics,
      countVideoPics,
      updatePicsEntries,
    })
  );
  const showAllIndexRef = useRef<
    number | null
  >(null);
  const { blurX, blurXRef } =
    useScroll();
  const picsCount = countPics();

  const videoPicsCount =
    countVideoPics();

  const isViewingOnlyVideoPics =
    picsCount === videoPicsCount;

  const onToggleShow = () => {
    const prev = blurX.get();
    blurXRef.current = animate(
      blurX,
      100,
      {
        type: "tween",
        onComplete: () =>
          blurX.set(prev),
      }
    );

    if (isViewingOnlyVideoPics) {
      updatePicsEntries({
        cells:
          picsEntries[
            showAllIndexRef.current ?? 0
          ],
      });
      showAllIndexRef.current = null;
    } else {
      if (
        showAllIndexRef.current === null
      ) {
        showAllIndexRef.current =
          picsEntries.length - 1;
      }
      updatePicsEntries({
        cells: videoPics,
      });
    }
  };

  return {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
  };
};
