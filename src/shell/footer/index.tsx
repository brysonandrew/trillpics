import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { withControlsCheck } from "~/store/hocs/with-controls-check";

type TProps = TPropsWithChildren;
export const Footer: FC<TProps> =
  withControlsCheck(({ children }) => {
    return (
      <footer className="fixed left-1/2 -translate-1/2 bottom-0 container h-0 z-10">
        <div className="relative bottom-6 row-space w-full h-0">
          {children}
        </div>
      </footer>
    );
  });
