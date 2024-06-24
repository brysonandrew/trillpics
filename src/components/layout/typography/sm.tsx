import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const TypographySm: FC<
  TDivProps
> = ({ classValue, children, ...props }) => {
  return (
    <div
      className={clsx("relative text-left leading-none text-sm uppercase font-slab",classValue)}
      {...props}
    >
      {children}
    </div>
  );
};
