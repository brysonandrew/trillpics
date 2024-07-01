import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

type TProps = TDivProps & {
  opacityClassValue?:
    | "opacity-50"
    | string;
};
export const TexturesMesh: FC<
  TProps
> = ({
  classValue,
  opacityClassValue = "opacity-50",
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "fill _bi-mesh pointer-events-none",
        opacityClassValue,
        classValue
      )}
      style={{
        ...style,
      }}
      {...props}
    />
  );
};
