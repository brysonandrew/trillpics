import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TexturesWeave } from "~/components/textures/weave";

type TProps = TDivProps;
export const TexturesWeaveInset: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  return (
    <TexturesWeave
      classValue="inset-2"
      style={{
        ...style,
      }}
      {...props}
    />
  );
};
