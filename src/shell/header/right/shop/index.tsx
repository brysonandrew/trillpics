import { NONE_CURSOR_KEY } from '@brysonandrew/cursor';
import { I } from '@brysonandrew/icons-i';
import { SHOP_ICON } from '@brysonandrew/icons-keys/shop';
import { HOME_ROUTE } from '@app/routes';
import { Link } from 'react-router-dom';
import { ICON_CLASS_VALUE_PROPS } from '../../config';
import { Item } from '../Item';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/config-types';
import { FC } from 'react';

type TProps = TClassValueProps;
export const Shop: FC<TProps> = ({
  classValue,
}) => {
  return (
    <Link
      className={clsx(
        'fill center cursor-pointer',
        classValue,
      )}
      to={HOME_ROUTE}
    >
      <Item
        cursorKey={NONE_CURSOR_KEY}
        title='Continue shopping'
        icon={
          <I
            className='relative h-7 w-7'
            icon={SHOP_ICON}
            {...ICON_CLASS_VALUE_PROPS}
          />
        }
      >
        shop
      </Item>
    </Link>
  );
};
