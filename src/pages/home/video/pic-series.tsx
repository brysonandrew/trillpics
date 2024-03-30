import { FC } from "react";
import { AudioAndVisualizer } from "@pages/home/video/audio";
import {
  SCHEMA,
  PIC_COUNT,
  PIC_SIZE,
  ASPECT_RATIO,
  TOTAL_DURATION_IN_FRAMES,
} from "@pages/home/video/constants";
import {
  AbsoluteFill,
  Img,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

export type TPicSeriesProps = z.infer<
  typeof SCHEMA
>;
export const PicSeries: FC<
  TPicSeriesProps
> = ({ pics }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } =
    useVideoConfig();
  const frameInSecond = frame % fps;
  const progressInSecond =
    frameInSecond / fps;
  const picCount = pics.length;
  const audioSrc = staticFile(
    "src/pages/gallery/context/entries/video/audio/insurrection-10941.mp3"
  );
  return (
    <AbsoluteFill>
      <Series>
        {picCount >= PIC_COUNT &&
          pics.map((name, index) => {
            const src = staticFile(
              `src/pages/gallery/context/entries/video/pics/${name}.avif`
            );

            return (
              <Series.Sequence
                key={`${name}${index}`}
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
      <AudioAndVisualizer
        src={audioSrc}
      />
    </AbsoluteFill>
  );
};
