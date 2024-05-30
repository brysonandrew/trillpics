import type { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { TScreen } from "~/shell/init/hooks/measure/measure";
import { ReadyContextProvider } from "~/shell/ready/context";
import { ScreenTooSmallOverlay } from "~/shell/ready/too-small-overlay";

type TProps =
  TPropsWithChildren<TScreen>;
export const ShellReady: FC<TProps> = ({
  children,
  ...screen
}) => {
  if (!screen.isDimensions) return null;
  if (!screen.isWideEnough)
    return <ScreenTooSmallOverlay />;
  return (
    <ReadyContextProvider
      screen={screen}
    >
      {children}
    </ReadyContextProvider>
  );
};
