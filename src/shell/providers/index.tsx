import { TLayoutOptionsRecord } from '@brysonandrew/app';
import { ScrollProvider } from '@brysonandrew/scroll';
import { DarkModeProvider } from '@brysonandrew/dark-mode';
import { NetworkProvider } from '@brysonandrew/network';
import { CursorProvider } from '@brysonandrew/cursor';
import { TChildrenProps } from '@brysonandrew/config-types/dom';
import {
  FC,
  PropsWithChildren,
  useMemo,
} from 'react';
import { arrToNest } from '@brysonandrew/layout-utils/arrToNest';
import { TCustomStyle } from '@app/style';
import { App } from '@shell/providers/App';

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
        CursorProvider,
        NetworkProvider,
        DarkModeProvider,
        ScrollProvider,
      ],
      <App>{_children}</App>,
      {},
    );
  }, []);

  return <>{children}</>;
};
