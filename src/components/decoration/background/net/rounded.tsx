import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { useApp } from "@brysonandrew/app";
import { DecorationNet } from "~/components/decoration/background/net";

type TProps = TDivProps;
export const DecorationNetRounded: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <DecorationNet
      style={{
        borderRadius: BORDER_RADIUS.XL,
        ...style,
      }}
      {...props}
    />
  );
};
