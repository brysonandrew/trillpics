import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const PlayerBackground: FC<
  TDivProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className={clsx(
        "absolute -inset-2 bg-gray dark:bg-black rounded-lg opacity-40 dark:opacity-60",
        // "border border-white dark:border-black",
        classValue
      )}
      {...props}
    />
  );
};
