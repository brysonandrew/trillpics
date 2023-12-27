import {
  CART_CURSOR_KEY,
  NONE_CURSOR_KEY,
} from '@components/cursor/switch/config';
import { Circle } from '@components/decoration/Circle';
import { I } from '@components/Icon';
import { useCheckout } from '@context/checkout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { Item } from '../Item';

export const Cart = () => {
  const { count } = useCheckout();
  return (
    <Link to='/checkout'>
      <Item
        cursorKey={NONE_CURSOR_KEY}
        title='Proceed to checkout'
        icon={
          <>
            <I
              className='relative h-6 w-6'
              icon='mdi:cart'
              {...ICON_CLASS_VALUE_PROPS}
            />
            <Circle
              classValue='absolute top-0 right-0'
              gradient='bg-red-orange-amber'
            >
              {count.toLocaleString()}
            </Circle>
          </>
        }
      >
        <>Cart</>
      </Item>
    </Link>
  );
};
