import { FC } from "react";
import { motion } from "framer-motion";
import {
  PIC_SIZE,
  ASPECT_RATIO,
} from "~/constants/remotion";
import {
  AbsoluteFill,
  Audio,
  getInputProps,
  Img,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import {
  resolveAudioSrc,
  resolvePicSrc,
} from "~/utils/src";
import { FADE_PRESENCE } from "~/constants/animation";
const INPUT_PROPS = getInputProps();

export const PicSeries: FC<
  TPicSeriesProps
> = (props) => {
  const { pics } = {
    ...props,
    ...INPUT_PROPS,
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
    <motion.div {...FADE_PRESENCE}>
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
              durationInFrames={fps}
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
                  alt={src}
                />
              </AbsoluteFill>
            </Series.Sequence>
          );
        })}
      </Series>
    </motion.div>
  );
};
