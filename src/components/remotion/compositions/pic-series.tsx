import { FC } from "react";
import { PicSeries } from "~/components/remotion/pic-series";
import {
  Composition,
  getInputProps,
} from "remotion";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import {
  TPicSeriesProps,
  TPicSeriesSchema,
} from "~/components/remotion/pic-series/types";
const INPUT_PROPS =
  getInputProps<TPicSeriesProps>();
export const CompositionsPicSeries: FC<
  Partial<TPicSeriesProps>
> = (__inputPropsPartial) => {
  const {
    props: inputProps,
    ...props
  } = useRemotionProps({
    ...__inputPropsPartial,
    ...INPUT_PROPS,
  });
  const { fps, durationInFrames } =
    inputProps;

  return (
    <Composition<
      TPicSeriesSchema,
      TPicSeriesProps
    >
      id="pic-series"
      component={PicSeries}
      schema={PIC_SERIES_SCHEMA}
      defaultProps={inputProps}
      {...{ fps, durationInFrames }}
      {...props}
    />
  );
};
