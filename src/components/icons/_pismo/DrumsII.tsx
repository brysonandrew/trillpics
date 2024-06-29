import type { FC } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { Drums } from "@templates/icons/Drums";

type TProps = {
  isHover: boolean;
  classValue?: ClassValue;
};
export const DrumsII: FC<TProps> = ({
  isHover,
  classValue,
}) => (
  <Drums
    classValue={clsx(
      [
        isHover
          ? "fill-purple border-purple border-1"
          : "fill-current",
      ],
      classValue
    )}
  />
);
