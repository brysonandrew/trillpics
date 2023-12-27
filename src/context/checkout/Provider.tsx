import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Checkout } from '.';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';
import {
  DEFAULT_VALUES,
  TDefaultValues,
  TItem,
  TItems,
} from './config';
import { DefaultValues } from 'react-hook-form';
import { useLocalStorageForm } from './useLocalStorageForm';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const form = useLocalStorageForm<
    DefaultValues<TDefaultValues>
  >({ defaultValues: DEFAULT_VALUES });

  const [items, setItems] =
    useLocalStorage<TItems>(
      'cart-items',
      [],
    );

  const onItemsAdd = (
    next: TItem | TItems,
  ) => {
    setItems((prev) => [
      ...prev,
      ...(Array.isArray(next)
        ? next
        : [next]),
    ]);
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

  return (
    <Checkout.Provider
      value={{
        form,
        count: items.length,
        items,
        onItemsAdd,
        onItemsRemove,
      }}
    >
      {children}
    </Checkout.Provider>
  );
};
