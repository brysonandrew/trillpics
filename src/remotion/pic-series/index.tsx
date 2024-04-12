import { FC } from "react";
import { useVideoStore } from "@store/index";
import {
  PicSeries,
} from "@/remotion/pic-series/series";
import {
  FPS,
  DIMENSIONS,
} from "@/remotion/constants";
import {
  Composition,
  getInputProps,
} from "remotion";
import { TPicSeriesSchema, TPicSeriesProps } from "@/remotion/pic-series/types";
import { PIC_SERIES_SCHEMA } from "@/remotion/pic-series/schema";

const INPUT_PROPS = getInputProps();

export const CompositionsPicSeries: FC =
  () => {
    const { videoPics } =
      useVideoStore();

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

    return (
      <Composition<
        TPicSeriesSchema,
        TPicSeriesProps
      >
        id="pic-series"
        component={PicSeries}
        durationInFrames={
          durationInFrames
        }
        fps={FPS}
        schema={PIC_SERIES_SCHEMA}
        defaultProps={{
          pics,
        }}
        {...DIMENSIONS}
        {...INPUT_PROPS}
      />
    );
  };
