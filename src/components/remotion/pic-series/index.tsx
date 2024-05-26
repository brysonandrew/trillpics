import { FC } from "react";
import {
  PIC_SIZE,
  ASPECT_RATIO,
} from "~/constants/remotion";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import {
  resolveAudioSrc,
  resolvePicSrc,
} from "~/utils/src";
import {
  getInputProps,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  AbsoluteFill,
  Series,
  Img,
  Audio,
} from "remotion";
const INPUT_PROPS = getInputProps();

export const PicSeries: FC<
  TPicSeriesProps
> = (props) => {
  const inputProps = {
    ...props,
    ...INPUT_PROPS,
  };
  const { pics, seconds, count } =
    inputProps;
  const frame = useCurrentFrame();
  const { fps, width, height } =
    useVideoConfig();
  console.log(width, height);

  const unitSeconds = seconds / count;
  const unitFrames = unitSeconds * fps;
  const frameInUnit =
    frame % unitFrames;
  const secondInUnit =
    frameInUnit / (fps * unitSeconds);
  const delta = height - inputProps.dimensions.height;
  const audioSrcPath = resolveAudioSrc(
    "insurrection-10941"
  );
  const audioSrc = staticFile(
    audioSrcPath
  );
  return (
    <AbsoluteFill>
      <Audio src={audioSrc} />
      <Series>
        {pics.map((pic) => {
          const srcPath =
            resolvePicSrc(pic);
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
