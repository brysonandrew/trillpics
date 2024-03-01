import {
  FC,
  useEffect,
  useState,
} from 'react';
import type { TChildrenElement } from '@brysonandrew/config-types';
import { Checkout } from '.';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';
import {
  TChosenConfig,
  TItem,
  TItemEntries,
  TItemRecord,
  TItems,
  TItemsConfig,
} from './config';
import {
  TChosen,
  TPendingId,
  TPendingRecordId,
} from '@t/image';
import { resolvePendingRecordId } from '@utils/images/resolvePendingRecordId';
import { PENDING_DELIMITER } from '@constants/images';
import { resolvePendingId } from '@utils/images/resolvePendingId';

type TProviderProps = {
  children: TChildrenElement;
};
export const CheckoutProvider: FC<
  TProviderProps
> = ({ children }) => {
  const [record, setRecord] =
    useLocalStorage<TItemRecord>(
      'checkout-record',
      {},
    );
  const [
    notifications,
    setNotificaitons,
  ] = useState<TItems>([]);

  const entries = Object.entries(
    record,
  ) as TItemEntries;

  useEffect(() => {
    const nextRecord: TItemRecord = {};
    for (const [
      key,
      value,
    ] of entries) {
      if (value.length > 0) {
        nextRecord[key] = value;
      }
    }
    setRecord(nextRecord);
  }, []);

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

    setRecord((prev) => {
      arr.forEach((item: TItem) => {
        const curr =
          prev[item.recordId];

        if (curr) {
          prev[item.recordId] =
            curr.filter(
              (v) => v.id !== item.id,
            );
          delete prev[item.recordId];
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
      prev.filter((value) => {
        return arr.every(
          (arrValue) =>
            arrValue.id !== value.id,
        );
      }),
    );
  };

  const handleItemsRemoveLast = (
    recordId: TPendingRecordId,
  ) => {
    setRecord((prev) => {
      const next = prev[
        recordId
      ].filter(
        (_, i, { length }) =>
          i !== length - 1,
      );
      if (next.length > 0) {
        return {
          ...prev,
          [recordId]: next,
        };
      }
      const { [recordId]: _, ...rest } =
        prev;
      return rest;
    });
  };

  return (
    <Checkout.Provider
      value={{
        count: entries.length,
        entries,
        record,
        notifications,
        onItemsAdd,
        onItemsRemove,
        onItemsRemoveLast:
          handleItemsRemoveLast,
        onNotificationsRemove:
          handleNotificationsRemove,
      }}
    >
      {children}
    </Checkout.Provider>
  );
};
