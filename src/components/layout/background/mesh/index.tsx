import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { boxRadius } from "~uno/rules/box/radius";

export const BackgroundMesh: FC<
  TDivProps
> = ({ style, ...props }) => {
  const borderRadius = boxRadius();
  const commonProps = {
    style: { borderRadius, ...style },
    ...props,
  };
  return (
    <div
      className="absolute inset-0 dark:(bg-white opacity-50 bg-image-none) _light-gradient-mesh"
      {...commonProps}
    />
  );
};
