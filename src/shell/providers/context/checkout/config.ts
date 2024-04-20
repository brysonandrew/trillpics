import {
  TSpecifications,
  TPending,
  TPendingRecordId,
  TChosen,
} from '~/types/image';

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
export type TItemEntry = [
  TPendingRecordId,
  TPending[],
];
export type TItemEntries = TItemEntry[];

export type TChosenConfig =
  | TChosen
  | TChosen[];
export type TItemsConfig =
  | TItem
  | TItems;

export type TContext =
  TNotificationsContext & {
    count: number;
    record: TItemRecord;
    entries: TItemEntries;
    onItemsAdd: (
      next: TChosenConfig,
    ) => void;
    onItemsRemove: (
      next: TItemsConfig,
    ) => void;
    onItemsRemoveLast: (
      recordId: TPendingRecordId,
    ) => void;
  };
