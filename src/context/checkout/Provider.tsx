import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Checkout } from '.';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';
import { TItems } from './types';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const [items, setItems] =
    useLocalStorage<TItems>(
      'cart-items',
      [],
    );

  const onItemsUpdate = setItems;

  return (
    <Checkout.Provider
      value={{
        count: items.length,
        items,
        onItemsUpdate,
      }}
    >
      {children}
    </Checkout.Provider>
  );
};
