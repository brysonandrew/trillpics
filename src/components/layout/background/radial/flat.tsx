import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";

export const BackgroundRadialFlat: FC<
  TDivProps
> = ({ classValue, style, ...props }) => {
  const borderRadius = boxRadius();
  const commonProps = {
    style: { borderRadius, ...style },
    ...props,
  };
  return (
    <div
      className={clsx("absolute -inset-0.0675 dark:(bg-black) _bi-radial",classValue)}
      {...commonProps}
    />
  );
};
