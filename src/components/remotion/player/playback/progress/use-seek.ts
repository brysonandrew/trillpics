import { PointerEventHandler } from "react";
import { useTrillPicsStore } from "~/store";

export const useSeek = () => {
  const {
    fps,
    durationInFrames,
    seekSeconds,
  } = useTrillPicsStore(
    ({
      fps,
      durationInFrames,
      seekSeconds,
    }) => ({
      fps,
      durationInFrames,
      seekSeconds,
    })
  );
  const handleSeek = (
    progress: number
  ) => {
    const secondsDuration = Math.floor(
      durationInFrames / fps
    );

    const progressInSeconds =
      secondsDuration * progress;
    seekSeconds(progressInSeconds);
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
