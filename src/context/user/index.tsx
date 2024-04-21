import type {
  FC,
  PropsWithChildren,
} from "react";
import { LOCAL_STORAGE_USER_KEY } from "~/constants/keys";
import {
  useContext as useReactContext,
  createContext,
} from "react";
import { NOOP } from "~/constants/functions";
import { useLocalStorage } from "@brysonandrew/hooks-dom";

export type TUser = {
  email: string;
  password: string;
} | null;

export type TContext = {
  user: TUser;
  onUpdateUser(user: TUser): void;
};

export const CONTEXT: TContext = {
  user: null,
  onUpdateUser: NOOP,
};

export const Context =
  createContext<TContext>(CONTEXT);

export const useContext =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProviderProps = PropsWithChildren;
export const UserProvider: FC<
  TProviderProps
> = ({ children }) => {
  const [user, setUser] =
    useLocalStorage<TUser>(
      LOCAL_STORAGE_USER_KEY,
      null
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
