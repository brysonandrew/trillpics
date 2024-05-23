import type { FC } from "react";
import { MIN_MAX_10_RANGE } from "~/components/slider/constants";
import { UiInputsSliderRow } from "~/components/slider/row";
import { usePicVideoWriteSeconds } from "~/hooks/pic/video/write/seconds/hook";

export const SecondsSlider: FC = () => {
  const {
    seconds,
    setDurationInSeconds,
  } = usePicVideoWriteSeconds();
  const handleValueChange = ([value]: [
    number
  ]) => {
    setDurationInSeconds(value);
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
