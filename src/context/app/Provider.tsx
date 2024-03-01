import {
  useState,
  type FC,
} from 'react';
import type { TChildrenElement } from '@brysonandrew/config-types';
import { App } from '.';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const [isMenu, setMenu] =
    useState(false);

  const [isOffline, setOffline] =
    useState(false);
  const [isInit, setInit] =
    useState(false);
  const onMenu = () =>
    setMenu((prev) => !prev);
  const onInit = () => setInit(true);
  const onOffline = () =>
    setOffline(true);
  const onOnline = () =>
    setOffline(false);

  return (
    <App.Provider
      value={{
        isMenu,
        onMenu,
        isInit,
        isOffline,
        onInit,
        onOffline,
        onOnline,
      }}
    >
      {children}
    </App.Provider>
  );
};
