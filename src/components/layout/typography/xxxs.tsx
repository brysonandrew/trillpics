import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const TypographyXxxs: FC<
  TDivProps
> = ({
  classValue,
  children,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "relative text-center leading-none text-xxxs uppercase font-sans",
        classValue
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
