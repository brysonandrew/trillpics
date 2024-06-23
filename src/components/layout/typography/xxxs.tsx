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
        "relative leading-none text-xxxs uppercase font-sans",
        classValue ?? 'text-center'
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
