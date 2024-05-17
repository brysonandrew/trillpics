import type { FC } from "react";
import { MIN_MAX_10_RANGE } from "~/components/slider/constants";
import { UiInputsSliderRow } from "~/components/slider/row";
import { usePicVideo } from "~/hooks/pic/video";

export const Slider: FC = () => {
  const {
    seconds,
    setDurationInSeconds,
  } = usePicVideo();
  const handleValueChange = ([value]: [
    number
  ]) => {
    setDurationInSeconds(value);
    console.log(value);
  };

  return (
    <UiInputsSliderRow
      name={"seconds"}
      value={[seconds]}
      onValueChange={handleValueChange}
      {...MIN_MAX_10_RANGE}
    />
  );
};
