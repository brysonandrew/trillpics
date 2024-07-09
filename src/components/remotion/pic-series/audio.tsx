import type { FC } from "react";
import {
  useVideoConfig,
  Series,
  Audio,
} from "remotion";

type TProps = {
  recording: any;
};
export const PicSeriesAudio: FC<
  TProps
> = ({ recording }) => {
  const { durationInFrames, fps } =
    useVideoConfig();


  return (
    <Audio
    startFrom={0}
    src={recording.src}
  />
  );
};
