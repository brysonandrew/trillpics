import { FC } from "react";
import {
  SCHEMA, PIC_SIZE,
  ASPECT_RATIO
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
import { AudioAndVisualizer } from "@pages/home/video/composition/audio";

export type TPicSeriesProps = z.infer<
  typeof SCHEMA
>;
export const PicSeries: FC<
  TPicSeriesProps
> = ({ pics }) => {
  const frame = useCurrentFrame();
  const { fps, height } =
    useVideoConfig();
  const frameInSecond = frame % fps;
  const progressInSecond =
    frameInSecond / fps;

  const audioSrc = staticFile(
    "video/audio/insurrection-10941.mp3"
  );
  return (
    <AbsoluteFill>
      <Series>
        {pics.map((pic) => {
          const src = staticFile(pic);

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
      <AudioAndVisualizer
        src={audioSrc}
      />
    </AbsoluteFill>
  );
};
