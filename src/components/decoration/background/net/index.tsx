import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

type TProps = TDivProps;
export const DecorationNet: FC<
  TProps
> = ({
  classValue,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "fill _net-gradient pointer-events-none opacity-50",
        classValue
      )}
      style={{
        ...style,
      }}
      {...props}
    />
  );
};
