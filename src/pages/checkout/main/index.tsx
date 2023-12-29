import { Collection } from '@components/collection';
import { Pendings } from '@components/collection/variants/Pendings';
import { useCheckout } from '@context/checkout';
import { TItemEntries } from '@context/checkout/config';
import { Options } from './Options';
import { Payment } from './payment';

export const Main = () => {
  const { record } = useCheckout();

  const entries = Object.entries(
    record,
  ) as TItemEntries;
  return (
    <main className='relative column w-full py-16'>
      <Collection>
        <Pendings entries={entries} />
      </Collection>
      <Payment />
      <Options />
    </main>
  );
};
