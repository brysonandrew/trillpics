import type { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";

export const Screen: FC<
  TPropsWithChildren
> = ({ children }) => (
  <div className="fixed w-full h-0 top-1/2 left-0">
    <div className="absolute left-0 top-1/2 -translate-y-1/2">
      {children}
    </div>
  </div>
);
