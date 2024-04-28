import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { useTrillPicsStore } from "~/store";

export const useRemotionProps = () => {
  const {
    screen,
    videoPics,
    fps,
    countVideoPics,
    picsCount,
  } = useTrillPicsStore(
    ({
      screen,
      videoPics,
      fps,
      countVideoPics,
      picsCount,
    }) => ({
      screen,
      videoPics,
      fps,
      countVideoPics,
      picsCount,
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
