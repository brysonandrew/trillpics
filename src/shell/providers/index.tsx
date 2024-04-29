import {
  FC,
  PropsWithChildren,
  useMemo,
} from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { arrToNest } from "@brysonandrew/layout-utils/arrToNest";
import { TCustomStyle } from "~app/style";
import { VirtualizeScrollProvider } from "~/shell/pics/virtualize/use-scroll";

export type TApp = TCustomStyle;

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const children = useMemo(() => {
    return arrToNest<PropsWithChildren>(
      [
        NetworkProvider,
        DarkModeProvider,
      ],
      <>{_children}</>,
      {}
    );
  }, []);

  return (
    <VirtualizeScrollProvider>
      {children}
    </VirtualizeScrollProvider>
  );
};
