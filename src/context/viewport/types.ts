import { TViewport } from '@hooks/window/useViewport';

export type TContext = TViewport & {
  isVertical: boolean;
  size: number;
};
