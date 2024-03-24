import { FC } from "react";
import { Composition } from "remotion";
import { resolveViewportSelfCenter } from "../../../components/pics/pic/resolveViewportSelfCenter";
import { useImageDimensions } from "../../../hooks/image/useImageDimensions";
import { useVideoStore } from "./store";
// import { resolveViewportSelfCenter } from "../../../components/images/image/resolveViewportSelfCenter";
// import { useImageDimensions } from "../../../hooks/image/useImageDimensions";
import {
  DIMENSIONS,
  FPS,
  SCHEMA,
} from "./constants";
import { PicSeries, TPicSeriesProps } from "./pic-series";

export const Root: FC = () => {
  const { videoPics: pics } =
    useVideoStore();
  return (
    <Composition<
      typeof SCHEMA,
      TPicSeriesProps
    >
      id="pic-series"
      component={PicSeries}
      durationInFrames={pics.length * FPS}
      fps={FPS}
      schema={SCHEMA}
      defaultProps={{
        pics,
      }}
      {...DIMENSIONS}
    />
  );
};
