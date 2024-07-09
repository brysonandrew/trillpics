import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";

export const FooterNavText: FC<TDivProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="relative pt-1 flex items-baseline px-2 uppercase text-xl text-main leading-none font-slab z-0 _sf-outline"
      {...props}
    >
      {children}
    </div>
  );
};
