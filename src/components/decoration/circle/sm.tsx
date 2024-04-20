import type { FC } from "react";
import {
  Circle,
  TCircleProps,
} from "~/components/decoration/circle/circle";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";

export const CircleSm: FC<
  TCircleProps
> = ({ ...props }) => {
  const style = useBorderStyleMd();
  return (
    <Circle style={style} {...props} />
  );
};
