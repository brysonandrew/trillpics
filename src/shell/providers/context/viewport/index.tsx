import {
  FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import { isVertical } from "~/shell/providers/context/viewport/is-vertical";
import {
  TViewport,
  useContainerMeasure,
} from "~/hooks/window/use-container-measure";

import {
  TUseGrid,
  useGrid,
} from "./use-grid";

export type TContext = TViewport &
  TUseGrid & {
    isVertical: boolean;
  };

const CONTEXT = createContext<TContext>(
  {} as TContext
);

export const useViewport =
  (): TContext =>
    useReactContext<TContext>(CONTEXT);

type TProviderProps = PropsWithChildren;
export const ViewportProvider: FC<
  TProviderProps
> = ({ children }) => {
  const viewport =
    useContainerMeasure();
  const grid = useGrid(viewport);

  return (
    <CONTEXT.Provider
      value={{
        ...viewport,
        ...grid,
        isVertical:
          isVertical(viewport),
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
