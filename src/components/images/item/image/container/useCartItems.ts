import {
  COLORS,
  SIZES,
} from '@constants/images';
import { TItemRecord } from '@context/checkout/config';
import {
  TDisplay,
  TPending,
} from '@t/image';
import { resolvePendingRecordId } from '@utils/images/resolvePendingRecordId';
import { useMemo } from 'react';

type TConfig = TDisplay & {
  record: TItemRecord;
};
export const useCartItems = ({
  name,
  src,
  record,
}: TConfig) => {
  const cartItems = useMemo(() => {
    const items: {
      count: number;
      config: TPending;
    }[] = [];
    COLORS.forEach((color) => {
      SIZES.forEach((size) => {
        const id =
          resolvePendingRecordId({
            name,
            src,
            color,
            size,
          });
        const recordItems = record[id];
        if (
          recordItems &&
          recordItems.length > 0
        ) {
          items.push({
            count: recordItems.length,
            config: recordItems[0],
          });
        }
      });
    });
    return items;
  }, [name, src, record]);

  return cartItems;
};
export type TUseCartItems = ReturnType<
  typeof useCartItems
>;
