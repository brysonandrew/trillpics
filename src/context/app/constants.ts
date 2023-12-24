import type { TContext } from './types';
import { NOOP } from '@constants/functions';

export const CONTEXT: TContext = {
  isMenu: false,
  isOffline: false,
  isInit: true,
  onMenu: NOOP,
  onInit: NOOP,
  onOffline: NOOP,
  onOnline: NOOP,
};
