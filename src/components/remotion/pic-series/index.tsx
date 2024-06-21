import { FC, Fragment } from "react";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { resolvePicSrc } from "~/utils/src";
import {
  getInputProps,
  useVideoConfig,
  staticFile,
  AbsoluteFill,
  Img,
  useCurrentFrame,
  Audio
} from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
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
  const {
    fps,
    width,
    height,
    durationInFrames,
  } = useVideoConfig();
  const unitSeconds = seconds / count;
  const unitFrames = Math.floor(
    durationInFrames / count
  ); //  unitSeconds * fps;
  const frameInUnit =
    frame % unitFrames;
  // const secondInUnit =
  //   frameInUnit / (fps * unitSeconds);
  const delta =
    height -
    inputProps.dimensions.height;
  return (
    <AbsoluteFill>
      {recording !== null &&
        isDefined(recording) && (
          <Audio src={recording.src} />
        )}
      <TransitionSeries>
        {pics.map((pic, index) => {
          const srcPath = resolvePicSrc(
            { base, name: pic }
          );
          const src =
            staticFile(srcPath);

          const top = `${Math.floor(
            (delta / height) *
              unitSeconds *
              100
          )}%`;
          return (
            <Fragment key={`${src}`}>
              {index !== 0 && (
                <TransitionSeries.Transition
                  presentation={slide()}
                  timing={linearTiming({
                    durationInFrames:
                      unitFrames/2,
                  })}
                />
              )}
              <TransitionSeries.Sequence
                durationInFrames={
                  unitFrames * 1.5
                }
              >
                <Img
                  src={src}
                  alt={`${pic}`}
                  {...{
                    width,
                    height: width,
                  }}
                />
              </TransitionSeries.Sequence>
            </Fragment>
          );
        })}
      </TransitionSeries>
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
