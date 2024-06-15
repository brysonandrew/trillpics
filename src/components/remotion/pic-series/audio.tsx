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
  const remainderFrames = Math.ceil(
    (durationInSeconds %
      audioLoopDurationInSeconds) *
      fps
  );

  return (
    <Series>
      {[
        ...[
          ...Array(audioLoopCount),
        ].map((_, index) => (
          <Series.Sequence
            key={`${index}`}
            offset={0}
            durationInFrames={
              (audioLoopDurationInSeconds *
              fps)+fps*2
            }
          >
            <Audio
              startFrom={0}
              src={recording.src}
            />
          </Series.Sequence>
        )),
        <Series.Sequence
          key={`last`}
          durationInFrames={
            remainderFrames
          }
        >
          <Audio
            startFrom={0}
            src={recording.src}
          />
        </Series.Sequence>,
      ]}
    </Series>
  );
};
