import { PointerEventHandler } from "react";
import { usePicVideo } from "~/hooks/pic/video";
import { useTrillPicsStore } from "~/store/middleware";

export const useSeek = () => {
  const { fps, seekSeconds } =
    useTrillPicsStore(
      ({ fps, seekSeconds }) => ({
        fps,
        seekSeconds,
      })
    );
  const { seconds } = usePicVideo();

  const handleSeek = (
    progress: number
  ) => {
    const progressInSeconds =
      seconds * progress;
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

    handleSeek(progress);
  };

  return {
    handler,
    durationInFrames: seconds * fps,
  };
};
