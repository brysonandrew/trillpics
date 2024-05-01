import type { FC } from "react";
import {
  Circle,
  TCircleProps,
} from "~/components/layout/circle/circle";
import { boxStyle } from "~/constants/box/style";

export const CircleSm: FC<
  TCircleProps
> = ({ ...props }) => {
  const borderStyle = boxStyle({layer:'flat',borderRadius:'XL',size:'sm'})

  return (
    <Circle style={borderStyle} {...props} />
  );
};
