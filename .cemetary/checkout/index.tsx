import { P86Y } from '@brysonandrew/space';
import { useCheckout } from '@shell/providers/context/checkout';
import { TItemEntries } from '@shell/providers/context/checkout/config';
import { TPending } from '@t/image';

export const Checkout = () => {
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
  const price = 44;
  const total = count * 44;

  return (
    <main>
      <ul>
        {entries.map(([key, value]) => (
          <li key={key}>
            <div>{key}</div>
            <div>
              {JSON.stringify(
                value,
                null,
                2,
              )}
            </div>
          </li>
        ))}
      </ul>
      <ul>
        <li>count: {count}</li>
        <li>price: {price}</li>
        <li>total: {total}</li>
      </ul>
      <P86Y />
    </main>
  );
};
