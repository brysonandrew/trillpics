import { Item } from '@components/images/item';
import { FC } from 'react';
import { useViewport } from '@shell/providers/context/viewport';
import { TItemEntries } from '@shell/providers/context/checkout/config';

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
        if (items.length === 0)
          return null;
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
