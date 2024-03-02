import { TClassValueProps } from '@brysonandrew/config-types';
import { NONE_CURSOR_KEY } from '@brysonandrew/cursor';
import { Pill } from '@components/decoration/Pill';
import { Cart as Icon } from '@components/icons/Cart';
import { CHECKOUT_ROUTE } from '@constants/routes';
import { useCheckout } from '@shell/providers/context/checkout';
import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '..';

type TProps = TClassValueProps;
export const Cart: FC<TProps> = ({
  classValue,
}) => {
  const { count } = useCheckout();

  return (
    <Link
      className={clsx(
        'fill center',
        classValue,
      )}
      to={CHECKOUT_ROUTE}
    >
      <Item 
        cursorKey={NONE_CURSOR_KEY}
        title='Proceed to checkout'
        icon={
          <>
            <Icon />
            <Pill
              classValue='absolute top-0 right-0'
              gradient='bg-red-orange-amber'
            >
              <span className='n'>
                {count?.toLocaleString()}
              </span>
            </Pill>
          </>
        }
      >
        cart
      </Item>
    </Link>
  );
};
