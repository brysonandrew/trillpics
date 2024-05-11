import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { usePicVideo } from "~/hooks/pic/video";
import { useTrillPicsStore } from "~/store/middleware";

export const useRemotionProps = () => {
  const {
    names,
    isVideoPics,
    count,
    seconds,
  } = usePicVideo();
  const { screen, fps, picsCount } =
    useTrillPicsStore(
      ({ screen, fps, picsCount }) => ({
        screen,
        fps,
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

  const videoPics = isVideoPics
    ? names
    : [...Array(5)].map(
        () =>
          `${Math.floor(
            picsCount * Math.random()
          )}`
      );

  const durationInFrames =
    count * fps || 1;
  console.log(
    durationInFrames,
    videoPics,
    fps
  );
  return {
    fps,
    durationInFrames,
    props: {
      pics: videoPics,
      count,
      seconds,
    },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
