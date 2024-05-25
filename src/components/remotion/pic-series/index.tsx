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
  const { pics, seconds, count } = {
    ...props,
    ...INPUT_PROPS,
  };
  const frame = useCurrentFrame();
  const { fps, height } =
    useVideoConfig();
  const unitSeconds = seconds / count;
  const unitFrames = unitSeconds * fps;
  const frameInSecond = frame % fps;
  const progressInSecond =
  frameInSecond / fps;

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
console.log(src)
          return (
            <Series.Sequence
              key={`${src}`}
              durationInFrames={
               Math.max(1,unitFrames)
              }
            >
              <AbsoluteFill
                style={{
                  left: 0,
                  top:
                    (PIC_SIZE -
                      height *
                        ASPECT_RATIO) *
                    progressInSecond,
                }}
              >
                <Img
                  src={src}
                  alt={`${pic}`}
                />
              </AbsoluteFill>
            </Series.Sequence>
          );
        })}
      </Series>
    </AbsoluteFill>
  );
};
