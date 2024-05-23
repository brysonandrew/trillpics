import { useMemo } from "react";
import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { useTrillPicsStore } from "~/store/middleware";

export const useRemotionProps = () => {
  const picVideoInputs =
    usePicVideoReadInputs();
  const {
    screen,
    fps,
    pics: allPics,
  } = useTrillPicsStore(
    ({ screen, fps, pics }) => ({
      screen,
      fps,
      pics,
    })
  );
  const dimensions = useImageDimensions(
    {
      box: screen.isDimensions
        ? screen
        : null,
      image: DIMENSIONS,
    }
  );

  const pics = useMemo(() => {
    return picVideoInputs.isPics
      ? picVideoInputs.pics
      : [...Array(5)].map(
          () =>
            `${Math.floor(
              allPics.length *
                Math.random()
            )}`
        );
  }, [picVideoInputs]);
  const seconds =
    picVideoInputs.seconds || 10;
  const durationInFrames =
    seconds * fps;
  const count = pics.length;
  return {
    fps,
    durationInFrames,
    props: {
      pics,
      count,
      seconds,
      isPics: count > 0,
    },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
