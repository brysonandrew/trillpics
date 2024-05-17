import type { FC } from "react";
import { MIN_MAX_10_RANGE } from "~/components/slider/constants";
import { UiInputsSliderRow } from "~/components/slider/row";
import { usePicVideo } from "~/hooks/pic/video";

export const Slider: FC = () => {
  const {} = usePicVideo;
  const handleValueChange = ([value]: [
    number
  ]) => {
    console.log(value);
  };
  const value = 0;

  return (
    <UiInputsSliderRow
      name={"name"}
      value={[value]}
      onValueChange={handleValueChange}
      {...MIN_MAX_10_RANGE}
    />
  );
};
