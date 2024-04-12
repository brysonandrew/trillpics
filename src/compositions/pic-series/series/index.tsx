import { FC } from "react";
import {
  SCHEMA,
  PIC_SIZE,
  ASPECT_RATIO,
} from "@video/constants";
import {
  AbsoluteFill,
  Img,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { AudioAndVisualizer } from "@/compositions/pic-series/series/audio";
import { resolveAudioSrc, resolvePicsSrc } from "@components/collection/config/items";

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
    resolveAudioSrc(
      "insurrection-10941"
    )
  );
  return (
    <AbsoluteFill>
      <Series>
        {pics.map((pic) => {
          const src = staticFile(
            resolvePicsSrc(pic)
          );

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
