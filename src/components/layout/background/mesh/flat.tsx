import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { boxRadius } from "~uno/rules/box/radius";

export const BackgroundMeshFlat: FC<
  TDivProps
> = ({ style, ...props }) => {
  const borderRadius = boxRadius();
  const commonProps = {
    style: { borderRadius, ...style },
    ...props,
  };
  return (
    <div
      className="absolute inset-0 dark:(bg-black opacity-80 bg-image-none) _light-gradient-mesh"
      {...commonProps}
    />
  );
};
