import { FC } from "react";
import { PicSeries } from "~/components/remotion/pic-series";
import { DIMENSIONS } from "~/constants/remotion";
import { Composition, getInputProps } from "remotion";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import {
  TPicSeriesSchema,
  TPicSeriesProps,
} from "~/components/remotion/pic-series/types";
const INPUT_PROPS =getInputProps()
export const CompositionsPicSeries: FC =
  (__inputProps) => {
    const {
      props: _inputProps,
      ...props
    } = useRemotionProps();
    const inputProps = {
      ...__inputProps,
      ..._inputProps,
      ...INPUT_PROPS
    };
    inputProps.seconds =
      inputProps.seconds || inputProps.count || 10;
    const durationInFrames =
      inputProps.seconds * props.fps;
    return (
      <Composition<
        TPicSeriesSchema,
        TPicSeriesProps
      >
        id="pic-series"
        component={PicSeries}
        schema={PIC_SERIES_SCHEMA}
        defaultProps={inputProps}
        durationInFrames={
          durationInFrames
        }
        {...props}
      />
    );
  };
