import type { FC } from 'react';
import { Context } from '.';
import {
  TContext,
  TUser,
} from './types';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';
import { TChildrenElement } from '@brysonandrew/config-types';
import { LOCAL_STORAGE_USER_KEY } from '@constants/keys';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const [user, setUser] =
    useLocalStorage<TUser>(
      LOCAL_STORAGE_USER_KEY,
      null,
    );

  const value: TContext = {
    user,
    onUpdateUser: setUser,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
