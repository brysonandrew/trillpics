import {
  FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import { isVertical } from "@shell/providers/context/viewport/is-vertical";
import {
  TViewport,
  useViewport as useWindowViewport,
} from "../../../../hooks/window/useViewport";
import {
  TUseGrid,
  useGrid,
} from "./useGrid";

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
  const viewport = useWindowViewport();
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
