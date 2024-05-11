import { useRef } from "react";
import { animate } from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { useScrollTopHandler } from "~/context/scroll/top";
import { useContextGrid } from "~/context";
import { usePicVideo } from "~/hooks/pic/video";

export const useShow = () => {
  const {
    pics: videoPics,
    count: videoPicsCount,
  } = usePicVideo();
  const {
    pics,
    picsCount,
    updatePics,
  } = useTrillPicsStore(
    ({
      pics,
      picsCount,
      updatePics,
    }) => ({
      pics,
      picsCount,
      updatePics,
    })
  );
  const { handler } =
    useScrollTopHandler();
  const showAllIndexRef = useRef<
    number | null
  >(null);
  const { main } = useContextGrid();

  const isViewingOnlyVideoPics =
    picsCount === videoPicsCount;

  const onToggleShow = () => {
    const prev =
      main.blur.value.x.get();
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
      // updatePics('reset');
      showAllIndexRef.current = null;
    } else {
      if (
        showAllIndexRef.current === null
      ) {
        showAllIndexRef.current =
          pics.length - 1;
      }
      // updatePics({
      //   pics: videoPics,
      // });
      handler();
    }
  };

  return {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
  };
};
