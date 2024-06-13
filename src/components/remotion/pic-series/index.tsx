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
  useCurrentFrame,
  Audio,
} from "remotion";
import { isString } from "~/utils/validation/is/string";
import { PicSeriesAudio } from "~/components/remotion/pic-series/audio";
import { isDefined } from "~/utils/validation/is/defined";
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
    recording,
  } = inputProps;

  const frame = useCurrentFrame();
  const { fps, width, height } =
    useVideoConfig();

  const unitSeconds = seconds / count;
  const unitFrames = unitSeconds * fps;
  const frameInUnit =
    frame % unitFrames;
  const secondInUnit =
    frameInUnit / (fps * unitSeconds);
  const delta =
    height -
    inputProps.dimensions.height;
  return (
    <AbsoluteFill>
      {/* {recording?.src && (
        <Audio src={recording.src} />
      )} */}
      {recording !== null && isDefined(recording) && (
        <PicSeriesAudio
          recording={recording}
        />
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
// const recording = staticFile(
//   audioSrcPath
// const source = new AudioBufferSourceNode(offlineCtx, {
//   buffer: decodedBuffer,
// });
