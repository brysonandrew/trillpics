import {
  FC,
  PropsWithChildren,
  useMemo,
} from 'react';
import { Circle } from '@components/decoration/Circle';
import {
  COLORS,
  SIZES,
} from '@constants/images';
import { useCheckout } from '@context/checkout';
import { TPending } from '@t/image';
import { resolvePendingRecordId } from '@utils/images/resolvePendingRecordId';
import { I } from '@components/Icon';
import { CART_ICON } from '@constants/icons/cart';
import { Line } from '@components/layout/Line';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CHECKOUT_ROUTE } from '@constants/routes';
import { TitleNav } from '@components/layout/text/nav/TitleNav';
import { TitleIconNav } from '@components/layout/text/nav/TitleIconNav';
import { P2 } from '@components/layout/space/P2';

type TProps = PropsWithChildren<
  Pick<TPending, 'name' | 'src'>
>;
export const AddedItems: FC<TProps> = ({
  name,
  src,
  children,
}) => {
  const { record } = useCheckout();

  const cartItems = useMemo(() => {
    const items: {
      count: number;
      config: TPending;
    }[] = [];
    COLORS.forEach((color) => {
      SIZES.forEach((size) => {
        const id =
          resolvePendingRecordId({
            name,
            src,
            color,
            size,
          });
        const recordItems = record[id];
        if (
          recordItems &&
          recordItems.length > 0
        ) {
          items.push({
            count: recordItems.length,
            config: recordItems[0],
          });
        }
      });
    });
    return items;
  }, []);
  return (
    <>
      {cartItems.length > 0 ? (
        <motion.div
          className='absolute bottom-6 right-6 column-end'
          layout
        >
          <Link to={CHECKOUT_ROUTE}>
            <TitleIconNav
              icon={
                <I icon={CART_ICON} />
              }
            >
              cart
            </TitleIconNav>
          </Link>
          <Line />
          <P2/>
          <motion.ul
            className='column-end gap-2'
            layout
          >
            {cartItems.map(
              ({
                config: {
                  id,
                  color,
                  size,
                },
                count,
              }) => (
                <li
                  key={id}
                  className='row gap-4 whitespace-none'
                >
                  <p className='uppercase'>
                    {`${color} ${size}`}
                  </p>
                  <Circle
                    key='enter'
                    classValue='pointer-events-none'
                    gradient='bg-green-emerald-teal'
                  >
                    <>x {count}</>
                  </Circle>
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
