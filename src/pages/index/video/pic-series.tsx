import { AudioAndVisualizer } from "@pages/index/video/audio";
import { FC } from "react";
import {
  AbsoluteFill,
  Img,
  Series,
  staticFile,
} from "remotion";
import { z } from "zod";
import {
  SCHEMA,
  PIC_COUNT,
} from "./constants";

export const PicSeries: FC<
  z.infer<typeof SCHEMA>
> = ({ pics }) => {
  // const frame = useCurrentFrame();
  // const { durationInFrames, fps } =
  //   useVideoConfig();
  const picCount = pics.length;
  const audioSrc = staticFile(
    "video/audio/insurrection-10941.mp3"
  );
  console.log(
    audioSrc,
    picCount,
    PIC_COUNT
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "blue",
      }}
    >
      <Series>
        {picCount >= PIC_COUNT &&
          pics.map((name) => {
            const src = staticFile(
              `video/originals/${name}.png`
            );
            console.log(src);

            return (
              <Series.Sequence
                key={`${name}`}
                durationInFrames={1}
              >
                <AbsoluteFill>
                  <Img
                    src={src}
                    alt={src}
                  />
                </AbsoluteFill>
              </Series.Sequence>
            );
          })}
      </Series>
      <AudioAndVisualizer src={audioSrc}/>
      {/* <Audio
        volume={0.5}
        src={audioSrc}
        startFrom={0}
        endAt={TOTAL_DURATION_IN_FRAMES}
      /> */}
    </AbsoluteFill>
  );
};
