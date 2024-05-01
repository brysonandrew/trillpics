import { useRef } from "react";
import { animate } from "framer-motion";
import { useTrillPicsStore } from "~/store/index";
import { useScrollTopHandler } from "~/shell/pics/virtualize/scroll/top-handler";
import { useVirtualizeContext } from "~/shell/pics/virtualize/context";

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
  const { handler } =
    useScrollTopHandler();
  const showAllIndexRef = useRef<
    number | null
  >(null);
  const { blurX, blurXRef } =
    useVirtualizeContext();
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
      handler();
    }
  };

  return {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
  };
};
