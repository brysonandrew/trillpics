import type { TContext } from './types';
import { NOOP } from '@constants/functions';

export const CONTEXT: TContext = {
  isOffline: false,
  isInit: true,
  onInit: NOOP,
  onOffline: NOOP,
  onOnline: NOOP,
};
