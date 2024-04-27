import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { useTrillPicsStore } from "~/store";
import { useViewport } from "~/context/viewport";

export const useRemotionProps = () => {
  const {
    videoPics,
    fps,
    countVideoPics,
    picsCount,
    addVideoPic,
  } = useTrillPicsStore(
    ({
      videoPics,
      fps,
      countVideoPics,
      picsCount,
      addVideoPic,
    }) => ({
      videoPics,
      fps,
      countVideoPics,
      picsCount,
      addVideoPic,
    })
  );
  const viewport = useViewport();
  const dimensions = useImageDimensions(
    {
      box: viewport.isDimensions
        ? viewport
        : null,
      image: DIMENSIONS,
    }
  );

  const videoPicsCount =
    countVideoPics();
  const pics =
    videoPicsCount === 0
      ? [...Array(picsCount)].map(
          () =>
            `${Math.floor(
              picsCount * Math.random()
            )}`
        )
      : videoPics;

  const durationInFrames =
    pics.length * fps || 1;

  return {
    fps,
    durationInFrames,
    props: { pics },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
