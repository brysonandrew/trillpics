import { FC } from "react";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { resolvePicSrc } from "~/utils/src";
import {
  getInputProps,
  useVideoConfig,
  staticFile,
  AbsoluteFill,
  Series,
  Img,
  Audio,
  useCurrentFrame,
  Sequence,
} from "remotion";
const INPUT_PROPS = getInputProps();

export const PicSeries: FC<
  TPicSeriesProps
> = (props) => {
  const inputProps = {
    ...props,
    ...INPUT_PROPS,
  };
  const {
    pics,
    seconds,
    count,
    base,
    audio,
  } = inputProps;

  const frame = useCurrentFrame();
  const {
    fps,
    width,
    height,
    durationInFrames,
  } = useVideoConfig();
  const durationInSeconds =
    durationInFrames / fps;

  const unitSeconds = seconds / count;
  const unitFrames = unitSeconds * fps;
  const frameInUnit =
    frame % unitFrames;
  const secondInUnit =
    frameInUnit / (fps * unitSeconds);
  const delta =
    height -
    inputProps.dimensions.height;
  const audioLoopDurationInSeconds =
    audio?.seconds ?? durationInSeconds;
  const audioLoopCount = Math.ceil(
    durationInSeconds /
      audioLoopDurationInSeconds
  );
  return (
    <AbsoluteFill>
      {audio && (
        <Series>
          {[
            ...Array(audioLoopCount),
          ].map((_, index) => (
            <Series.Sequence
              key={`${index}`}
              durationInFrames={
                audioLoopDurationInSeconds *
                fps
              }
            >
              <Audio src={audio.src} />
            </Series.Sequence>
          ))}
        </Series>
      )}
      <Series>
        {pics.map((pic) => {
          const srcPath = resolvePicSrc(
            { base, name: pic }
          );
          const src =
            staticFile(srcPath);

          const top = `${Math.floor(
            (delta / height) *
              secondInUnit *
              100
          )}%`;
          return (
            <Series.Sequence
              key={`${src}`}
              durationInFrames={
                unitFrames
              }
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top,
                }}
              >
                <Img
                  src={src}
                  alt={`${pic}`}
                  {...{
                    width,
                    height: width,
                  }}
                />
              </div>
            </Series.Sequence>
          );
        })}
      </Series>
    </AbsoluteFill>
  );
};
// const audioSrcPath = resolveAudioSrc({
//   base,
//   name: "insurrection-10941",
// });
// const audio = staticFile(
//   audioSrcPath
// const source = new AudioBufferSourceNode(offlineCtx, {
//   buffer: decodedBuffer,
// });
