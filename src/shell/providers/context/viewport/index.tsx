import {
  FC,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from 'react';
import { TViewport, useViewport as useWindowViewport } from '@hooks/window/useViewport';
import { useSize } from './useSize';

export type TContext = TViewport & {
  isVertical: boolean;
  size: number;
};

const CONTEXT = createContext<TContext>(
  {} as TContext,
);

export const useViewport =
  (): TContext =>
    useReactContext<TContext>(CONTEXT);

type TProviderProps = PropsWithChildren;
export const ViewportProvider: FC<
  TProviderProps
> = ({ children }) => {
  const viewport = useWindowViewport();
  const size = useSize(viewport);
  
  const isVertical = (
    dimensions: TViewport,
  ) => {
    const { isDimensions } = dimensions;
    if (isDimensions) {
      return (
        dimensions.width <
          dimensions.height &&
        dimensions.width < 700
      );
    }
    return false;
  };

  return (
    <CONTEXT.Provider
      value={{
        ...viewport,
        size,
        isVertical:
          isVertical(viewport),
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
