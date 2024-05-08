import { useRef } from "react";
import { animate } from "framer-motion";
import { useTrillPicsStore } from "~/store/index";
import { useScrollTopHandler } from "~/pics/virtualize/scroll/handlers/top";
import { useVirtualizeContext } from "~/pics/virtualize/context";

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
  const { main } =
    useVirtualizeContext();
  const picsCount = countPics();

  const videoPicsCount =
    countVideoPics();

  const isViewingOnlyVideoPics =
    picsCount === videoPicsCount;

  const onToggleShow = () => {
    const prev = main.blur.value.x.get();
    main.blur.control.x = animate(
      main.blur.value.x,
      100,
      {
        type: "tween",
        onComplete: () =>
          main.blur.value.x.set(prev),
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
