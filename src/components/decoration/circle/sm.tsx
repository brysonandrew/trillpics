import type { FC } from "react";
import { useCircleButtonStyle } from "@/components/buttons/use-circle-button-style/sm";
import {
  Circle,
  TCircleProps,
} from "@/components/decoration/circle/circle";

export const CircleSm: FC<
  TCircleProps
> = ({ ...props }) => {
  const style = useCircleButtonStyle();
  return (
    <Circle style={style} {...props} />
  );
};
