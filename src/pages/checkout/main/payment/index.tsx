import { Collection } from '@components/collection';
import { Pendings } from '@components/collection/variants/Pendings';
import { B } from '@components/interactive/B';
import { HOME_ROUTE } from '@constants/routes';
import { useCheckout } from '@context/checkout';
import { TItemEntries } from '@context/checkout/config';
import { TPending } from '@t/image';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CheckoutForm from './Form';

export const Payment = () => {
  const { record } = useCheckout();

  const values = Object.values(
    record,
  ) as TPending[][];
  const count = values.reduce(
    (a, c) => {
      return a + c.length;
    },
    0,
  );
  const price = count * 44;

  return (
    <motion.div className=''>
      To complete this order please pay ${price}

      {/* <CheckoutForm/> */}
    </motion.div>
  );
};
