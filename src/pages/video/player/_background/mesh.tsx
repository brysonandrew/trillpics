import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const PlayerBackgroundMesh: FC<
  TDivProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className={clsx(
        "absolute -inset-1 _bi-mesh rounded-md opacity-60",
        classValue
      )}
      {...props}
    />
  );
};
