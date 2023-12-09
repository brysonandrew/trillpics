import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Viewport } from '.';
import {
  TViewport,
  useViewport,
} from '@hooks/window/useViewport';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const viewport = useViewport();

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
        isVertical:
          isVertical(viewport),
      }}
    >
      {children}
    </Viewport.Provider>
  );
};
