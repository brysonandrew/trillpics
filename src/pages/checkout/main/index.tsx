import { Collection } from '@components/collection';
import { Pendings } from '@components/collection/variants/Pendings';
import { useCheckout } from '@context/checkout';
import { TItemEntries } from '@context/checkout/config';
import { TPending } from '@t/image';
import { Options } from './Options';
import { Payment } from './payment';
import { Empty } from './payment/Empty';

export const Main = () => {
  const { record } = useCheckout();
  const entries = Object.entries(
    record,
  ) as TItemEntries;

  const values = Object.values(
    record,
  ) as TPending[][];
  const count = values.reduce(
    (a, c) => {
      return a + c.length;
    },
    0,
  );
  const price = count * 44;

  return (
    <main className='relative column w-full py-16'>
      {price > 0 ? (
        <>
          <Collection>
            <Pendings
              entries={entries}
            />
          </Collection>
          <Payment price={price} />
          <Options />
        </>
      ) : (
        <Empty />
      )}
    </main>
  );
};
