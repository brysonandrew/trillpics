import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const PlayerBackgroundOpaque: FC<
  TDivProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className={clsx(
        "absolute -inset-2 bg-black rounded-lg",
        classValue
      )}
      {...props}
    />
  );
};
