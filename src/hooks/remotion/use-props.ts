import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { useTrillPicsStore } from "~/store";

export const useRemotionProps = () => {
  const {
    screen,
    videoPics,
    fps,
    countVideoPics,
    countPics,
  } = useTrillPicsStore(
    ({
      screen,
      videoPics,
      fps,
      countVideoPics,
      countPics,
    }) => ({
      screen,
      videoPics,
      fps,
      countVideoPics,
      countPics,
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
  const picsCount = countPics();

  const videoPicsCount =
    countVideoPics();
  const pics =
    videoPicsCount === 0
      ? [...Array(5)].map(
          () =>
            `${Math.floor(
              picsCount * Math.random()
            )}`
        )
      : videoPics;

  const durationInFrames =
    pics.length * fps || 1;
console.log(durationInFrames,pics,fps)
  return {
    fps,
    durationInFrames,
    props: { pics },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
