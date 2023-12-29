import { FC, useState } from 'react';
import type { TChildrenElement } from '@t/index';
import { Checkout } from '.';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';
import {
  DEFAULT_VALUES,
  TChosenConfig,
  TItem,
  TItemEntries,
  TItemRecord,
  TItems,
  TItemsConfig,
} from './config';
import { useLocalStorageForm } from './useLocalStorageForm';
import {
  TChosen,
  TChosens,
  TPendingId,
  TSpecifications,
} from '@t/image';
import { resolvePendingRecordId } from '@utils/images/resolvePendingRecordId';
import { PENDING_DELIMITER } from '@constants/images';
import { resolvePendingId } from '@utils/images/resolvePendingId';

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
  const [record, setRecord] =
    useLocalStorage<TItemRecord>(
      'cart-item-record',
      {},
    );
  const [
    notifications,
    setNotificaitons,
  ] = useState<TItems>([]);

  const onItemsAdd = (
    next: TChosenConfig,
  ) => {
    const arr = Array.isArray(next)
      ? next
      : [next];
    const nextItems = arr.map(
      (v, index) => ({
        ...v,
        id: resolvePendingId({
          index,
          ...v,
        }) as TPendingId,
      }),
    ) as TItems;
    const update = (prev: TItems) => [
      ...prev,
      ...nextItems,
    ];
    setNotificaitons(update);
    // setItems(update);
    setRecord((prev) => {
      arr.forEach(
        (
          item: TChosen,
          index: number,
        ) => {
          const id =
            resolvePendingRecordId(
              item,
            );
          const curr = prev[id];
          const nextItem = {
            ...item,
            recordId: id,
            id: `${id}${PENDING_DELIMITER}${index}` as const,
          };
          if (curr) {
            prev[id].push(nextItem);
          } else {
            prev[id] = [nextItem];
          }
        },
      );
      return record;
    });
  };

  const onItemsRemove = (
    next: TItemsConfig,
  ) => {
    const arr = Array.isArray(next)
      ? next
      : [next];

    // setItems((prev) =>
    //   prev.filter((value, index) => {
    //     const firstIndex =
    //       arr.indexOf(value);
    //     return index !== firstIndex;
    //   }),
    // );

    setRecord((prev) => {
      arr.forEach((item: TItem) => {
        const curr =
          prev[item.recordId];
        if (curr) {
          prev[item.recordId] =
            curr.filter(
              (v) => v.id !== item.id,
            );
        }
      });
      return prev;
    });
  };

  const handleNotificationsRemove = (
    next: TItemsConfig,
  ) => {
    const arr = Array.isArray(next)
      ? next
      : [next];

    setNotificaitons((prev) =>
      prev.filter((value, index) => {
        return arr.every(
          (arrValue) =>
            arrValue.id !== value.id,
        );
      }),
    );
  };

  const handleNotificationsRemoveLast =
    (next: TItemsConfig) => {
      const arr = Array.isArray(next)
        ? next
        : [next];

      setNotificaitons((prev) =>
        prev.filter((value, index) => {
          return arr.every(
            (arrValue) =>
              arrValue.id !== value.id,
          );
        }),
      );
    };

  const entries = Object.entries(
    record,
  ) as TItemEntries;

  return (
    <Checkout.Provider
      value={{
        count: entries.length,
        entries,
        record,
        notifications,
        onItemsAdd,
        onItemsRemove,
        onNotificationsRemove:
          handleNotificationsRemove,
        onItemsRemoveLast:
          handleNotificationsRemoveLast,
      }}
    >
      {children}
    </Checkout.Provider>
  );
};
