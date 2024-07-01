import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TexturesMesh } from "~/components/layout/modal/textures/mesh";

type TProps = TDivProps;
export const TexturesMeshInset: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  return (
    <TexturesMesh
      classValue="inset-2"
      style={{
        ...style,
      }}
      {...props}
    />
  );
};
