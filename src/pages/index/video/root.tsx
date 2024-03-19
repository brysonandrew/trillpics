import { FC } from "react";
import { useVideoStore } from "@pages/index/video/store";
import { Composition } from "remotion";
import { useViewport } from "@shell/providers/context/viewport";
import { resolveViewportSelfCenter } from "@components/images/image/resolveViewportSelfCenter";
import { useImageDimensions } from "@hooks/image/useImageDimensions";
import {
  DIMENSIONS,
  FPS,
  SCHEMA,
} from "./constants";
import { PicSeries } from "./pic-series";

export const Root: FC = () => {
  const viewport = useViewport();
  const { videoPics: pics } =
    useVideoStore();
  console.log(pics);

  const dimensions = useImageDimensions(
    {
      image: DIMENSIONS,
      box: viewport.isDimensions
        ? viewport
        : DIMENSIONS,
    }
  );
  const style =
    viewport.isDimensions &&
    dimensions.isDimensions
      ? resolveViewportSelfCenter(
          viewport,
          dimensions
        )
      : null;
  if (!style) return null;
  return (
    <Composition
      id="pic-series"
      component={PicSeries}
      durationInFrames={pics.length}
      fps={FPS}
      schema={SCHEMA}
      defaultProps={{
        pics,
      }}
      {...style}
    />
  );
};
