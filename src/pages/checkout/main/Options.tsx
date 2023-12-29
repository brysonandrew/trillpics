import { Circle } from '@components/decoration/Circle';
import { B } from '@components/interactive/B';
import { HOME_ROUTE } from '@constants/routes';
import { useCheckout } from '@context/checkout';
import { TItemEntries } from '@context/checkout/config';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Options = () => {
  const { record } = useCheckout();

  const entries = Object.entries(
    record,
  ) as TItemEntries;
  return (
    <motion.div className='row-space sticky bottom-12 left-0 p-12 w-full bg-section rounded-md'>
      <div>
        <Link
          to={HOME_ROUTE}
          className='row gap-2'
        >
          <Circle
            classValue='text-main'
            gradient='bg-green-emerald-teal'
          >
            {'<'}
          </Circle>
          Back
        </Link>
      </div>

      <div className='row'>
        {/* Checkout {entries.length}{' '} */}
        Please enter your payment
        details below and click here
        <B>Confirm</B>
      </div>
    </motion.div>
  );
};
