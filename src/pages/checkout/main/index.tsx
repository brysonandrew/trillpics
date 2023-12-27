import { I } from '@components/Icon';
import { B } from '@components/interactive/B';
import { useCheckout } from '@context/checkout';

export const Main = () => {
  const { items } = useCheckout();
  return (
    <main className='relative column bg-main py-16'>
      <section className='w-full column'>
        <div className='relative w-container'>
          <B>
            <I icon='mdi:cart' />
            <ul>
              {items.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </B>
        </div>
      </section>
    </main>
  );
};
