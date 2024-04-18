import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "@/remotion/constants";
import { useVideoStore } from "@/store";
import { getInputProps } from "remotion";
import { useViewport } from "@/shell/providers/context/viewport";

const INPUT_PROPS = getInputProps();

export const useRemotionProps = () => {
  const { videoPics, fps } =
    useVideoStore();
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
    videoPics.length;
  const pics =
    videoPicsCount === 0
      ? [...Array(5)].map(
          (_, index) => `${++index}`
        )
      : videoPics;

  const durationInFrames =
    pics.length * fps || 1;

  return {
    fps,
    durationInFrames,
    props: { ...INPUT_PROPS, pics },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
