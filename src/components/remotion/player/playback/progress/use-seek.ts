import { PointerEventHandler } from "react";
import { useVideoStore } from "~/store";
import { useShallow } from "zustand/react/shallow";

export const useSeek = () => {
  const {
    fps,
    durationInFrames,
    seekBySeconds,
  } = useVideoStore(
    useShallow(
      ({
        fps,
        durationInFrames,
        seekBySeconds,
      }) => ({
        fps,
        durationInFrames,
        seekBySeconds,
      })
    )
  );
  const handleSeek = (
    progress: number
  ) => {
    const secondsDuration = Math.floor(
      durationInFrames / fps
    );

    const progressInSeconds =
      secondsDuration * progress;
    seekBySeconds(progressInSeconds);
  };

  const handler: PointerEventHandler<
    HTMLDivElement
  > = (event) => {
    const { left, width } =
      event.currentTarget.getBoundingClientRect();
    const pageX = event.pageX;
    const progress =
      (pageX - left) / width;

    console.log(progress);
    handleSeek(progress);
  };

  return { handler, durationInFrames };
};
