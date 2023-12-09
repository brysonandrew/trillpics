import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { App } from '.';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [isOffline, setOffline] = useState(false);
  const [isInit, setInit] = useState(false);
  const onInit = () => setInit(true);
  const onOffline = () => setOffline(true);
  const onOnline = () => setOffline(false);

  return (
    <App.Provider
      value={{
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
