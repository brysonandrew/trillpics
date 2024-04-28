import {
  FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import { isVertical } from "~/context/screen/is-vertical";
import {
  TScreen,
  useScreenMeasure,
} from "~/context/screen/measure";
import { useTrillPicsStore, useTrillPicsStoreBase } from "~/store";

export type TContext = TScreen & {
  isVertical: boolean;
};

const CONTEXT = createContext<TContext>(
  {} as TContext
);

export const useScreen =
  (): TContext =>
    useReactContext<TContext>(CONTEXT);

type TProviderProps = PropsWithChildren;
export const ScreenProvider: FC<
  TProviderProps
> = ({ children }) => {
  const { table } = useTrillPicsStoreBase(
    ({ table }) => ({ table })
  );
  const handleScreenReady = (
    screen: TScreen
  ) => {
    console.log("READY",table, screen);
    table.update.dimensions(screen);
  };
  const screen = useScreenMeasure({
    isContainer: true,
    onReady: handleScreenReady,
  });

  return (
    <CONTEXT.Provider
      value={{
        ...screen,
        isVertical:
          isVertical(screen),
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
