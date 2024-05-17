import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { usePicVideo } from "~/hooks/pic/video";
import { useTrillPicsStore } from "~/store/middleware";

export const useRemotionProps = () => {
  const {
    names,
    isVideoPics,
    seconds,
  } = usePicVideo();
  const secs = seconds || 10;
  const { screen, fps, pics } =
    useTrillPicsStore(
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

  const videoPics = isVideoPics
    ? names
    : [...Array(5)].map(
        () =>
          `${Math.floor(
            pics.length * Math.random()
          )}`
      );

  const durationInFrames = secs * fps;

  return {
    fps,
    durationInFrames,
    props: {
      pics: videoPics as string[],
      count: videoPics.length,
      seconds: secs,
    },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
