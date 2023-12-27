export type TItem = string;
export type TItems = TItem[];

export type TContext = {
  count: number;
  items: TItems;
  onItemsAdd: (
    next: TItem | TItems,
  ) => void;
  onItemsRemove: (
    next: TItem | TItems,
  ) => void;
};
