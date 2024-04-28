import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TexturesWeave } from "~/components/textures/weave";
import { boxRadius } from "~/constants/box/style/radius";

type TProps = TDivProps;
export const TexturesWeaveRounded: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  const borderRadius = boxRadius();
  return (
    <TexturesWeave
      style={{
        borderRadius,
        ...style,
      }}
      {...props}
    />
  );
};
