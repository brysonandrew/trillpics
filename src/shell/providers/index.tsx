import {
  FC,
  PropsWithChildren,
  useMemo,
} from "react";
import { TLayoutOptionsRecord } from "@brysonandrew/app";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { arrToNest } from "@brysonandrew/layout-utils/arrToNest";
import { TCustomStyle } from "~app/style";
import { Core } from "~/shell/providers/core";
import { ViewportProvider } from "~/context/viewport";
import { ScrollProvider } from "~/context/scroll";

type TLayoutOptions =
  TLayoutOptionsRecord;
export type TApp = TCustomStyle &
  TLayoutOptions;

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const children = useMemo(() => {
    return arrToNest<PropsWithChildren>(
      [
        NetworkProvider,
        DarkModeProvider,
        ViewportProvider,
      ],
      <Core>{_children}</Core>,
      {}
    );
  }, []);

  return (
    <ScrollProvider>
      {children}
    </ScrollProvider>
  );
};
