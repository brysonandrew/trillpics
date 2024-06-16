import { SCALE_VALUE_COUNT } from "~/constants/scales";

export const resolveTop = (
  index: number
) => {
  return `${
    (1 - index / SCALE_VALUE_COUNT) *
      80 +
    10
  }%`;
};
