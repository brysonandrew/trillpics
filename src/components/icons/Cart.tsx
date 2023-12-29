import { I } from '@components/Icon';
import { ICON_CLASS_VALUE_PROPS } from '@components/shell/footer/config';
import { CART_ICON } from '@constants/icons/cart';

export const Cart = () => (
  <I
    className='relative h-6 w-6'
    icon={CART_ICON}
    {...ICON_CLASS_VALUE_PROPS}
  />
);
