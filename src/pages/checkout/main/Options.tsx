import { Pill } from '@components/decoration/Pill';
import { I } from '@components/Icon';
import { B } from '@components/interactive/B';
import { CHEVRON_LEFT } from '@constants/icons/directionts';
import { HOME_ROUTE } from '@constants/routes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Options = () => {
  return (
    <motion.div className='row-space sticky bottom-2 left-0 right-0 p-12 w-full border-t-1-gray-02 backdrop-blur-lg bg-black-07'>
      <Link
        to={HOME_ROUTE}
        className='row gap-2'
      >
        <Pill
          classValue='text-main'
          gradient='bg-green-emerald-teal'
          isCircle
        >
          <I icon={CHEVRON_LEFT} />
        </Pill>
        Shop some more
      </Link>
      <div className='row gap-2'>
        <p>
          Please enter your payment
          details before confirming.
        </p>
        <B>Confirm</B>
      </div>
    </motion.div>
  );
};
