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
import { getInputProps, useCurrentFrame, useVideoConfig, staticFile, AbsoluteFill, Series, Img, Audio } from "remotion";
// const INPUT_PROPS = getInputProps();

export const PicSeries: FC<
  TPicSeriesProps
> = (props) => {
  const { pics, seconds, count } = {
    ...props,
    // ...INPUT_PROPS,
  };
  const frame = useCurrentFrame();
  const { fps, height } =
    useVideoConfig();
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
    <>
      <Audio src={audioSrc} /> 
   <Series>
        {pics.map((pic) => {
          const srcPath =
            resolvePicSrc(pic);
          const src =
            staticFile(srcPath);

          return (
            <Series.Sequence
              key={`${src}`}
              durationInFrames={pics.length / seconds * fps}
            >
              <AbsoluteFill
                style={{
                  left: 0,
                  top:
                    (PIC_SIZE -
                      height *
                        ASPECT_RATIO) *1
                    // progressInSecond,
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
    </>
  );
};
