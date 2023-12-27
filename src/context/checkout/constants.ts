import { NOOP } from '@constants/functions';
import type {
  TContext,
  TItems,
} from './types';

const INIT_ITEMS: TItems = [];

export const CONTEXT: TContext = {
  count: INIT_ITEMS.length,
  items: INIT_ITEMS,
  onItemsAdd: NOOP,
  onItemsRemove: NOOP,
};
