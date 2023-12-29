import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = { price: number };
export const Payment: FC<TProps> = ({
  price,
}) => {
  return (
    <motion.div className=''>
      To complete this order please pay
      ${price}
      {/* <CheckoutForm/> */}
    </motion.div>
  );
};
