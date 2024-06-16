import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";

export const TypographyXs: FC<
  TDivProps
> = ({ children, ...props }) => {
  return (
    <div
      className="relative text-center leading-none text-xs font-sans"
      {...props}
    >
      {children}
    </div>
  );
};
