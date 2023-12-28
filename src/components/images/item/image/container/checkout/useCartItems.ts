import { useCheckout } from '@context/checkout';
import { useMemo } from 'react';

export const useCartTitles = (
  src: string,
) => {
  const { form, items: allCartItems } =
    useCheckout();
  const { onItemsAdd } = useCheckout();

  const cartItems = useMemo(
    () =>
      allCartItems.filter(
        (item) => item.src === src,
      ),
    [allCartItems.length, src],
  );
  const cartItemCount =
    cartItems.length;
  const isCartItems = cartItemCount > 0;
};
