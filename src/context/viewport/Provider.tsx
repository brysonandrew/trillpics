import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Viewport } from '.';
import {
  TViewport,
  useViewport,
} from '@hooks/window/useViewport';
import { useSize } from './useSize';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const viewport = useViewport();
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
    <Viewport.Provider
      value={{
        ...viewport,
        size,
        isVertical:
          isVertical(viewport),
      }}
    >
      {children}
    </Viewport.Provider>
  );
};
