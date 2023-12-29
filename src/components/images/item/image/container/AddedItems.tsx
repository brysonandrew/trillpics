import {
  FC,
  PropsWithChildren,
} from 'react';
import { Pill } from '@components/decoration/Pill';
import { useCheckout } from '@context/checkout';
import {
  TDisplay,
  TPendingRecordId,
} from '@t/image';
import { I } from '@components/Icon';
import { Line } from '@components/layout/Line';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CHECKOUT_ROUTE } from '@constants/routes';
import { TitleIconNav } from '@components/layout/text/nav/TitleIconNav';
import { P2 } from '@components/layout/space/P2';
import { Cart } from '@components/icons/Cart';
import { TIMES_ICON } from '@constants/icons/text';
import { BSm } from '@components/interactive/BSm';
import { TUseCartItems } from './useCartItems';

type TProps = PropsWithChildren<
  TDisplay & {
    cartItems: TUseCartItems;
  }
>;
export const AddedItems: FC<TProps> = ({
  name,
  cartItems,
  children,
}) => {
  const { record, onItemsRemoveLast } =
    useCheckout();
  const handleRemove = (
    recordId: TPendingRecordId,
  ) => onItemsRemoveLast(recordId);

  return (
    <>
      {cartItems.length > 0 ? (
        <motion.div
          className='absolute bottom-6 right-6 column-end'
          layout
        >
          <Link to={CHECKOUT_ROUTE}>
            <TitleIconNav
              icon={<Cart />}
            >
              cart
            </TitleIconNav>
          </Link>
          <Line />
          <P2 />
          <motion.ul
            className='column-end gap-2'
            layout
          >
            {cartItems.map(
              ({
                config: {
                  id,
                  recordId,
                  color,
                  size,
                },
                count,
              }) => {
                const text =
                  `${color} ${size}` as const;
                return (
                  <motion.li
                    key={id}
                    className='row gap-4 whitespace-none'
                    layout='position'
                  >
                    <p className='uppercase'>
                      {text}
                    </p>
                    <Pill
                      classValue='pointer-events-none'
                      gradient='bg-green-emerald-teal'
                    >
                      <>
                        <I
                          icon={
                            TIMES_ICON
                          }
                        />{' '}
                        {count}
                      </>
                    </Pill>
                    <BSm
                      classValue='text-red'
                      icon={TIMES_ICON}
                      title={`Remove ${name}`}
                      onTap={() => {
                        handleRemove(
                          recordId,
                        );
                      }}
                    />
                  </motion.li>
                );
              },
            )}
          </motion.ul>
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
