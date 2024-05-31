import { FC } from "react";
import { CompositionsPicSeries } from "~/components/remotion/compositions/pic-series";
import { DEFAULT_INPUT } from "~/pages/video/player/_controls/download";

export const Root: FC = () => {
  return (
    <CompositionsPicSeries
      {...DEFAULT_INPUT}
    />
  );
};
