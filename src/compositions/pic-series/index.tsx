import { useVideoStore } from "@store/index";
import { TPicSeriesProps, PicSeries } from "@/compositions/pic-series/series";
import { FPS, SCHEMA, DIMENSIONS } from "@video/constants";
import { FC } from "react";
import { Composition, getInputProps } from "remotion";

const INPUT_PROPS = getInputProps();

export const CompositionsPicSeries: FC = () => {
  const { videoPics } = useVideoStore();

  const videoPicsCount =
    videoPics.length;
  const pics =
    videoPicsCount === 0
      ? [...Array(5)].map(
          (_, index) => `${++index}`
        )
      : videoPics;

  const durationInFrames =
    pics.length * FPS || 1;

  console.log(videoPics, pics, INPUT_PROPS)
  return (
    <Composition<
      typeof SCHEMA,
      TPicSeriesProps
    >
      id="pic-series"
      component={PicSeries}
      durationInFrames={
        durationInFrames
      }
      fps={FPS}
      schema={SCHEMA}
      defaultProps={{
        pics,
      }}
      {...DIMENSIONS}
      {...INPUT_PROPS}
    />
  );
};
