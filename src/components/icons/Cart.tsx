import { CART_ICON } from '@brysonandrew/icons-keys';
import { I } from '@components/Icon';
import { ICON_CLASS_VALUE_PROPS } from '@shell/header/config';

export const Cart = () => (
  <I
    className='relative h-7.5 w-7.5'
    icon={CART_ICON}
    {...ICON_CLASS_VALUE_PROPS}
  />
);
