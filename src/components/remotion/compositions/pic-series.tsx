import { FC } from "react";
import { PicSeries } from "~/components/remotion/pic-series";
import { DIMENSIONS } from "~/constants/remotion";
import { Composition } from "remotion";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import {
  TPicSeriesSchema,
  TPicSeriesProps,
} from "~/components/remotion/pic-series/types";

export const CompositionsPicSeries: FC =
  () => {

    const {
      props: defaultProps,
      ...props
    } = useRemotionProps();
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
