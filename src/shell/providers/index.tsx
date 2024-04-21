import { TLayoutOptionsRecord } from '@brysonandrew/app';
import { DarkModeProvider } from '@brysonandrew/dark-mode';
import { NetworkProvider } from '@brysonandrew/network';
import { CursorProvider } from '@brysonandrew/motion-cursor';
import { TChildrenProps } from '@brysonandrew/config-types/dom';
import {
  FC,
  PropsWithChildren,
  useMemo,
} from 'react';
import { arrToNest } from '@brysonandrew/layout-utils/arrToNest';
import { TCustomStyle } from '~app/style';
import { App } from '~/shell/providers/App';
import { BaseProvider } from '~/context/base';
import { UserProvider } from '~/context/user';
import { ViewportProvider } from '~/context/viewport';
import { ScrollProvider } from '~/context/scroll';

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
        BaseProvider,
        ScrollProvider,
        UserProvider,
        ViewportProvider,
      ],
      <App>{_children}</App>,
      {},
    ); 
  }, []);

  return <>{children}</>;
};
