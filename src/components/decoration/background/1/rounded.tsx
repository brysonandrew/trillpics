import type { FC } from "react";
import { useApp } from "@brysonandrew/app";
import {
  Background1,
  TBackground1Props,
} from "~/components/decoration/background/1";

export const Background1Rounded: FC<
  TBackground1Props
> = ({ ...props }) => {
  const { BORDER_RADIUS } = useApp();

  return (
    <Background1
      {...{
        style: {
          borderRadius:
            BORDER_RADIUS.XL,
        },
      }}
      {...props}
    />
  );
};
