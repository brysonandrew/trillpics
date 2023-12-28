import { NONE_CURSOR_KEY } from '@components/cursor/switch/config';
import { Circle } from '@components/decoration/Circle';
import { I } from '@components/Icon';
import { HOME_ROUTE } from '@constants/routes';
import { useCheckout } from '@context/checkout';
import { Link } from 'react-router-dom';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { Item } from '../Item';

export const Shop = () => {
  return (
    <Link
      className='cursor-pointer'
      to={HOME_ROUTE}
    >
      <Item
        cursorKey={NONE_CURSOR_KEY}
        title='Continue shopping'
        icon={(isHover) => (
          <I
            className='relative h-6 w-6'
            icon='fa6-solid:store'
            {...ICON_CLASS_VALUE_PROPS}
          />
        )}
      >
        <>Shop</>
      </Item>
    </Link>
  );
};
