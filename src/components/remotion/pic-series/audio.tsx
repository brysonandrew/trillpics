import type { FC } from "react";
import {
  useVideoConfig,
  Series,
  Audio,
} from "remotion";
import { TRecording } from "~/store/state/music/types";

type TProps = {
  recording: TRecording;
};
export const PicSeriesAudio: FC<
  TProps
> = ({ recording }) => {
  const { durationInFrames, fps } =
    useVideoConfig();
  const durationInSeconds =
    durationInFrames / fps;
  const audioLoopDurationInSeconds =
    recording.seconds ??
    durationInSeconds;
  const audioLoopCount = Math.ceil(
    durationInSeconds /
      audioLoopDurationInSeconds
  );
  return (
    <Series>
      {[...Array(audioLoopCount)].map(
        (_, index) => (
          <Series.Sequence
            key={`${index}`}
            durationInFrames={
              audioLoopDurationInSeconds *
              fps
            }
          >
            <Audio
              src={recording.src}
            />
          </Series.Sequence>
        )
      )}
    </Series>
  );
};
