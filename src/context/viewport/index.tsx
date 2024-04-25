import {
  FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from "react";
import { isVertical } from "~/context/viewport/is-vertical";
import { TViewport, useViewportMeasure } from "~/context/viewport/measure";

export type TContext = TViewport & {
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

  return (
    <CONTEXT.Provider
      value={{
        ...viewport,
        isVertical:
          isVertical(viewport),
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
