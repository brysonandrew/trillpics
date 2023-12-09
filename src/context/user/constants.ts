import { NOOP } from '@constants/functions';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  user: null,
  onUpdateUser: NOOP,
};
