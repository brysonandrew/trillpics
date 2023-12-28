import {
  TSpecifications,
  TPending,
  TPendingRecordId,
  TChosen,
  TChosens,
} from '@t/image';
import { TUseLocalStorageForm } from './useLocalStorageForm';

export const DEFAULT_VALUES: TSpecifications =
  {
    size: 'md',
    color: 'black',
  };

export type TNotificationsContext = {
  notifications: TItems;
  onNotificationsRemove: (
    next: TItemsConfig,
  ) => void;
};

export type TItem = TPending;
export type TItems = TItem[];
export type TItemRecord = Record<
  TPendingRecordId,
  TItems
>;

export type TChosenConfig =
  | TChosen
  | TChosen[];
export type TItemsConfig =
  | TItem
  | TItems;

export type TContext =
  TNotificationsContext & {
    count: number;
    items: TItems;
    form: TUseLocalStorageForm<TSpecifications>;
    onItemsAdd: (
      next: TChosenConfig,
    ) => void;
    onItemsRemove: (
      next: TItemsConfig,
    ) => void;
  };
