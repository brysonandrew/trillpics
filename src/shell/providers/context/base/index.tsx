import {
  useState,
  type FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from 'react';
import { NOOP } from '@constants/functions';
import { INITS } from '@components/collection/config/items';
import { shuffle } from '@utils/array/shuffle';

export type TContext = {
  inits: any[];
  isMenu: boolean;
  isInit: boolean;
  isOffline: boolean;
  onMenu(): void;
  onInit(): void;
  onOffline(): void;
  onOnline(): void;
  onRandomize(): void;
};

export const CONTEXT: TContext = {
  inits: [],
  isMenu: false,
  isOffline: false,
  isInit: true,
  onMenu: NOOP,
  onInit: NOOP,
  onOffline: NOOP,
  onOnline: NOOP,
  onRandomize: NOOP,
};

export const App =
  createContext<TContext>(CONTEXT);

export const useBase = (): TContext =>
  useReactContext<TContext>(App);

type TProviderProps = PropsWithChildren;
export const BaseProvider: FC<
  TProviderProps
> = ({ children }) => {
  const [itemRecord, setItemRecord] =
    useState([INITS]);
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
  const onRandomize = () => {
    const next = shuffle(INITS);
    setItemRecord((prev) => {
      return [...prev, next];
    });
  };
  const last =
    itemRecord[itemRecord.length - 1];
  return (
    <App.Provider
      value={{
        inits: last,
        isMenu,
        onMenu,
        isInit,
        isOffline,
        onInit,
        onOffline,
        onOnline,
        onRandomize,
      }}
    >
      {children}
    </App.Provider>
  );
};
