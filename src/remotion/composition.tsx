import { FC } from "react";
import { PicSeries } from "@/remotion/pic-series";
import { DIMENSIONS } from "@/remotion/constants";
import { Composition } from "remotion";
import { PIC_SERIES_SCHEMA } from "@/remotion/pic-series/schema";
import { useRemotionProps } from "@/remotion/use-props";
import {
  TPicSeriesSchema,
  TPicSeriesProps,
} from "@/remotion/pic-series/types";

export const CompositionsPicSeries: FC =
  () => {
    const {
      props: defaultProps,
      ...props
    } = useRemotionProps();
    console.log(
      "defaultProps",
      defaultProps
    );
    return (
      <Composition<
        TPicSeriesSchema,
        TPicSeriesProps
      >
        id="pic-series"
        component={PicSeries}
        schema={PIC_SERIES_SCHEMA}
        defaultProps={defaultProps}
        {...DIMENSIONS}
        {...props}
      />
    );
  };
