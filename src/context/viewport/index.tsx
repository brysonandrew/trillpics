import {
  FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import {
  TUseGrid,
  TViewport,
  useViewportMeasure,
  useGrid,
} from "@brysonandrew/viewport";
import { isVertical } from "~/context/viewport/is-vertical";
import { BREAKPOINT_RECORD } from "~/constants/css";

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
  const viewport = useViewportMeasure({
    isContainer: true,
  });
  const grid = useGrid(
    viewport,
    BREAKPOINT_RECORD
  );

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
