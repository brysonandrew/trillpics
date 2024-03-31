import {
  useState,
  type FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import { NOOP } from "@constants/functions";

export type TContext = {
  isMenu: boolean;
  isInit: boolean;
  isOffline: boolean;
  onMenu(): void;
  onInit(): void;
  onOffline(): void;
  onOnline(): void;
};

export const CONTEXT: TContext = {
  isMenu: false,
  isOffline: false,
  isInit: true,
  onMenu: NOOP,
  onInit: NOOP,
  onOffline: NOOP,
  onOnline: NOOP,
};

export const App =
  createContext<TContext>(CONTEXT);

export const useBase = (): TContext =>
  useReactContext<TContext>(App);

type TProviderProps = PropsWithChildren;
export const BaseProvider: FC<
  TProviderProps
> = ({ children }) => {
  const [isMenu, setMenu] =
    useState(false);
  const [isOffline, setOffline] =
    useState(false);
  const [isInit, setPic] =
    useState(false);
  const onMenu = () =>
    setMenu((prev) => !prev);
  const onInit = () => setPic(true);
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
