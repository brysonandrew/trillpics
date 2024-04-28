import type { FC } from "react";
import {
  Circle,
  TCircleProps,
} from "~/components/decoration/circle/circle";
import { useBoxStyle } from "~/store/hooks/core/box/use-box-style";

export const CircleSm: FC<
  TCircleProps
> = ({ ...props }) => {
  const borderStyle = useBoxStyle({layer:'flat',borderRadius:'borderRadius',size:'sm'})

  return (
    <Circle style={borderStyle} {...props} />
  );
};
