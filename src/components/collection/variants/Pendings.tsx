import { Item } from '@components/images/item';
import { FC } from 'react';
import { useViewport } from '@context/viewport';
import {
  TItemEntries,
  TItemRecord,
} from '@context/checkout/config';

type TProps = {
  entries: TItemEntries;
};
export const Pendings: FC<TProps> = ({
  entries,
}) => {
  const { size } = useViewport();

  return (
    <>
      {entries.map(([id, items]) => {
        return (
          <Item
            key={id}
            size={size}
            isShop={false}
            config={items[0]}
            canvas={items[0].color}
            copies={items}
            count={items.length}
          />
        );
      })}
    </>
  );
};
