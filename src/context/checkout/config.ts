import { TUseLocalStorageForm } from './useLocalStorageForm';

export type TName = string;
export const SIZES = [
  'sm',
  'md',
  'lg',
  'xl',
];
export type TSize =
  (typeof SIZES)[number];
export const COLORS = [
  'black',
  'white',
];
export type TColor =
  (typeof COLORS)[number];

export type TDefaultValues = {
  size: TSize;
  color: TColor;
};
export const DEFAULT_VALUES: TDefaultValues =
  {
    size: 'md',
    color: 'black',
  };

export const ORDER_DELIMITER = ':';
export type TOrderDelimiter =
  typeof ORDER_DELIMITER;
export type TItem =
  `${TName}${TOrderDelimiter}${TColor}${TOrderDelimiter}${TSize}`;
export type TItems = TItem[];
export type TContext = {
  count: number;
  items: TItems;
  form: TUseLocalStorageForm<TDefaultValues>;
  onItemsAdd: (
    next: TItem | TItems,
  ) => void;
  onItemsRemove: (
    next: TItem | TItems,
  ) => void;
};
