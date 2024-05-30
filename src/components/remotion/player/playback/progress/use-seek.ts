import { PointerEventHandler } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const useSeek = () => {
  const { fps } =
    useContextPlayer_Init();
  const { seek } =
    useContextPlayer_Ready();
  const seconds =
    usePicVideoReadSeconds();

  const handleSeek = (
    progress: number
  ) => {
    const progressInSeconds =
      seconds * progress;
    seek.seconds(progressInSeconds);
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
