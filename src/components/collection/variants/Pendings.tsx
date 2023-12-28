import { Item } from '@components/images/item';
import { TPending } from '@t/image';
import { FC } from 'react';
import { useViewport } from '@context/viewport';

type TProps = { pendings: TPending[] };
export const Pendings: FC<TProps> = ({
  pendings,
}) => {
  const { size } = useViewport();

  return (
    <>
      {pendings.map((pending) => {
        return (
          <Item
            key={pending.id}
            size={size}
            config={pending}
            canvas={pending.color}
          />
        );
      })}
    </>
  );
};
