import { FC, useState } from 'react';
import type { TChildrenElement } from '@t/index';
import { Checkout } from '.';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';
import {
  DEFAULT_VALUES,
  TItem,
  TItems,
} from './config';
import { useLocalStorageForm } from './useLocalStorageForm';
import { TSpecifications } from '@t/image';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const form =
    useLocalStorageForm<TSpecifications>(
      { defaultValues: DEFAULT_VALUES },
    );
  const [items, setItems] =
    useLocalStorage<TItems>(
      'cart-items',
      [],
    );
  const [
    notifications,
    setNotificaitons,
  ] = useState<TItems>([]);

  const onItemsAdd = (
    next: TItem | TItems,
  ) => {
    const update = (prev: TItems) => [
      ...prev,
      ...(Array.isArray(next)
        ? next
        : [next]),
    ];
    setNotificaitons(update);
    setItems(update);
  };

  const onItemsRemove = (
    next: TItem | TItems,
  ) => {
    const arr = Array.isArray(next)
      ? next
      : [next];

    setItems((prev) =>
      prev.filter((value, index) => {
        const firstIndex =
          arr.indexOf(value);
        return index !== firstIndex;
      }),
    );
  };

  const handleNotificationsClear = (
    next: TItem | TItems,
  ) => {
    console.log(next);
    setNotificaitons([]);
  };

  return (
    <Checkout.Provider
      value={{
        form,
        count: items.length,
        items,
        notifications,
        onItemsAdd,
        onItemsRemove,
        onNotificationsClear:
          handleNotificationsClear,
      }}
    >
      {children}
    </Checkout.Provider>
  );
};
