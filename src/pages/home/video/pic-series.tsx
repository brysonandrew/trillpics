import { FC } from "react";
import { AudioAndVisualizer } from "@pages/home/video/audio";
import {
  SCHEMA,
  PIC_COUNT,
  PIC_SIZE,
  ASPECT_RATIO,
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
    "video/audio/insurrection-10941.mp3"
  );

  return (
    <AbsoluteFill>
      <Series>
        {picCount >= PIC_COUNT &&
          pics.map((name) => {
            const src = staticFile(
              `video/originals/${name}.png`
            );

            return (
              <Series.Sequence
                key={`${name}`}
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
      {/* <AudioAndVisualizer
        src={audioSrc}
      /> */}
      {/* <Audio
        volume={0.5}
        src={audioSrc}
        startFrom={0}
        endAt={TOTAL_DURATION_IN_FRAMES}
      /> */}
    </AbsoluteFill>
  );
};
