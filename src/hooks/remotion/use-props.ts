import { useMemo } from "react";
import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { useTrillPicsStore } from "~/store/middleware";
import { DEFAULT_INPUT } from "~/pages/video/player/_header/download";

export const useRemotionProps = (
  picVideoInputs = DEFAULT_INPUT[
    "input"
  ]
) => {
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
        ? screen.container
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
  const count = pics.length;

  return {
    fps,
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
