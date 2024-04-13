import { DIMENSIONS } from "@/remotion/constants";
import { useVideoStore } from "@/store";
import { getInputProps } from "remotion";

const INPUT_PROPS = getInputProps();

export const useRemotionProps = () => {
  const { videoPics, fps } =
    useVideoStore();

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
    ...DIMENSIONS
  };
};
