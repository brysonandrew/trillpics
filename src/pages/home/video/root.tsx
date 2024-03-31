import { useVideoStore } from "@store/index";
import { FC } from "react";
import { Composition } from "remotion";
// import { resolveViewportSelfCenter } from "../../../components/images/image/resolveViewportSelfCenter";
// import { useImageDimensions } from "../../../hooks/image/useImageDimensions";
import {
  DIMENSIONS,
  FPS,
  SCHEMA,
} from "./constants";
import {
  PicSeries,
  TPicSeriesProps,
} from "./composition";

export const Root: FC = () => {
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
    />
  );
};
