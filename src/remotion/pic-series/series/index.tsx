import { FC } from "react";
import {
  PIC_SIZE,
  ASPECT_RATIO,
} from "@/remotion/constants";
import {
  AbsoluteFill,
  Img,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioAndVisualizer } from "@/remotion/pic-series/series/audio";
import {
  resolveAudioSrc,
  resolvePicSrc,
} from "@/components/collection/config/src";
import { TPicSeriesProps } from "@/remotion/pic-series/types";
import { useVideoStore } from "@/store";
import { Backdrop } from "@/components/backdrop";

export const PicSeries: FC<
  TPicSeriesProps
> = ({ pics }) => {
  const {
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();
  const frame = useCurrentFrame();
  const { fps, height } =
    useVideoConfig();
  const frameInSecond = frame % fps;
  const progressInSecond =
    frameInSecond / fps;

  const audioSrcPath = resolveAudioSrc(
    "insurrection-10941"
  );
  console.log(audioSrcPath);

  const audioSrc = staticFile(
    audioSrcPath
  );
  console.log(audioSrc);
  return (
    <Series>
      <Series.Sequence
        durationInFrames={
          fps * pics.length
        }
      >
        <Backdrop />
        {/* <AudioAndVisualizer
          src={audioSrc}
        /> */}
      </Series.Sequence>

      {pics.map((pic) => {
        const srcPath =
          resolvePicSrc(pic);
        const src = staticFile(srcPath);

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
  );
};
