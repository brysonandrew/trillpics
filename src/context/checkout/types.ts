import {
  Dispatch,
  SetStateAction,
} from 'react';

export type TItem = string;
export type TItems = TItem[];

export type TContext = {
  count: number;
  items: TItems;
  onItemsUpdate: Dispatch<
    SetStateAction<TItems>
  >;
};
