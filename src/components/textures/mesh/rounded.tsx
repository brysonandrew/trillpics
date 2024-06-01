import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TexturesMesh } from "~/components/textures/mesh";
import { boxRadius } from "~uno/rules/box/radius";

type TProps = TDivProps;
export const TexturesMeshRounded: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  const borderRadius = boxRadius();
  return (
    <TexturesMesh
      style={{
        borderRadius,
        ...style,
      }}
      {...props}
    />
  );
};
