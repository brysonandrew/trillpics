import type { FC } from "react";
import { MIN_MAX_10_RANGE } from "~/components/inputs/slider/constants";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";
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
      value={seconds}
      onUpdate={(_,value) => handleValueChange([Number(value)])}
      {...MIN_MAX_10_RANGE}
    />
  );
};
