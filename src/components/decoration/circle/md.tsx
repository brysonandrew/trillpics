import type { FC } from "react";
import {
  Circle,
  TCircleProps,
} from "~/components/decoration/circle/circle";
import { useBorderStyleSm } from "~/components/buttons/use-border-style/sm";

export const CircleSm: FC<
  TCircleProps
> = ({ ...props }) => {
  const style = useBorderStyleSm();
  return (
    <Circle style={style} {...props} />
  );
};
