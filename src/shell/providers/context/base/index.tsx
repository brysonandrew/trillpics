import {
  useState,
  type FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import { NOOP } from "@constants/functions";
import { PICS } from "@components/collection/config/items";
import { shuffle } from "@utils/array/shuffle";
import { useVideoStore } from "@pages/home/video/store";

export type TContext = {
  pics: number[];
  isMenu: boolean;
  isInit: boolean;
  isOffline: boolean;
  onMenu(): void;
  onInit(): void;
  onOffline(): void;
  onOnline(): void;
  onRandomize(): void;
  onToggleVideoPics(): void;
};

export const CONTEXT: TContext = {
  pics: [],
  isMenu: false,
  isOffline: false,
  isInit: true,
  onMenu: NOOP,
  onInit: NOOP,
  onOffline: NOOP,
  onOnline: NOOP,
  onRandomize: NOOP,
  onToggleVideoPics: NOOP,
};

export const App =
  createContext<TContext>(CONTEXT);

export const useBase = (): TContext =>
  useReactContext<TContext>(App);

type TProviderProps = PropsWithChildren;
export const BaseProvider: FC<
  TProviderProps
> = ({ children }) => {
  const x = useVideoStore();
  const [itemRecord, setItemRecord] =
    useState([PICS]);
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
  const onRandomize = () => {
    const next = shuffle(PICS);
    setItemRecord((prev) => {
      return [...prev, next];
    });
  };
  const onToggleVideoPics = () => {
    setItemRecord((prev) => {
      return [...prev, x.videoPics];
    });
  };
  const last =
    itemRecord[itemRecord.length - 1];
  return (
    <App.Provider
      value={{
        pics: last,
        isMenu,
        onMenu,
        isInit,
        isOffline,
        onInit,
        onOffline,
        onOnline,
        onRandomize,
        onToggleVideoPics,
      }}
    >
      {children}
    </App.Provider>
  );
};
