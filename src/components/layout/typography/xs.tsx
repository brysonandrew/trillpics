import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const TypographyXs: FC<
  TDivProps
> = ({ classValue, children, ...props }) => {
  return (
    <div
      className={clsx("relative text-center leading-none text-xs font-sans",classValue)}
      {...props}
    >
      {children}
    </div>
  );
};
