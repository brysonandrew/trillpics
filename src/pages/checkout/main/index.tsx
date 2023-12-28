import { Collection } from '@components/collection';
import { Pendings } from '@components/collection/variants/Pendings';
import { useCheckout } from '@context/checkout';

export const Main = () => {
  const { items } = useCheckout();
  return (
    <main className='relative column w-full py-16'>
      <Collection>
        <Pendings pendings={items} />
      </Collection>
    </main>
  );
};
