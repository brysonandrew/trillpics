import type { FC } from "react";
import {
  Background1,
  TBackground1Props,
} from "~/components/decoration/background/1";
import { useBorderRadiusXl } from "~/store/hooks/core/use-border-radius-xl";

export const Background1Rounded: FC<
  TBackground1Props
> = ({ ...props }) => {
  const borderRadius =
    useBorderRadiusXl();

  return (
    <Background1
      {...{
        style: {
          borderRadius,
        },
      }}
      {...props}
    />
  );
};
