import { INIT } from '@hooks/window/useViewport';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  ...INIT,
  size: 0,
  isVertical: false,
};
