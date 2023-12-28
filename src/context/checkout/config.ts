import {
  TSpecifications,
  TPending,
} from '@t/image';
import { TUseLocalStorageForm } from './useLocalStorageForm';

export const DEFAULT_VALUES: TSpecifications =
  {
    size: 'md',
    color: 'black',
  };

export type TNotificationsContext = {
  notifications: TItems;
  onNotificationsClear: (
    next: TItem | TItems,
  ) => void;
};

export type TItem = TPending;
export type TItems = TItem[];
export type TContext =
  TNotificationsContext & {
    count: number;
    items: TItems;
    form: TUseLocalStorageForm<TSpecifications>;
    onItemsAdd: (
      next: TItem | TItems,
    ) => void;
    onItemsRemove: (
      next: TItem | TItems,
    ) => void;
  };
