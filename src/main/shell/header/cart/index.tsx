import { NONE_CURSOR_KEY } from '@components/cursor/switch/config';
import { Pill } from '@components/decoration/Pill';
import { Cart as Icon } from '@components/icons/Cart';
import { CHECKOUT_ROUTE } from '@constants/routes';
import { useCheckout } from '@context/checkout';
import { useDarkMode } from '@context/dark-mode';
import { Link } from 'react-router-dom';
import { Item } from '../Item';

export const Cart = () => {
  const { darkKey } = useDarkMode();
  const { count } = useCheckout();

  return (
    <Link
      key={darkKey}
      to={CHECKOUT_ROUTE}
    >
      <Item
        cursorKey={NONE_CURSOR_KEY}
        title='Proceed to checkout'
        icon={(isHover) => (
          <>
            <Icon />
            <Pill
              classValue='absolute top-0 right-0'
              gradient='bg-red-orange-amber'
            >
              <span className='n'>
                {count.toLocaleString()}
              </span>
            </Pill>
          </>
        )}
      >
        cart
      </Item>
    </Link>
  );
};
