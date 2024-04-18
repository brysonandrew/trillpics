import type { FC } from "react";
import {
  Circle,
  TCircleProps,
} from "@/components/decoration/circle/circle";
import { useCircleButtonStyleMd } from "@/components/buttons/use-circle-button-style/md";

export const CircleSm: FC<
  TCircleProps
> = ({ ...props }) => {
  const style =
    useCircleButtonStyleMd();
  return (
    <Circle style={style} {...props} />
  );
};
