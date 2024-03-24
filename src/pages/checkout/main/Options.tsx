import { Pill } from '@components/decoration/Pill';
import { I } from '@brysonandrew/icons-i';
import { B } from '@brysonandrew/interactive';
import { CHEVRON_LEFT } from '@brysonandrew/icons-keys';
import { HOME_ROUTE } from '@app/routes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Options = () => {
  return (
    <motion.div className='row-space sticky bottom-2 left-0 right-0 p-12 w-full border-t-1-gray-02 backdrop-blur-lg bg-black-07 z-60'>
      <Link
        to={HOME_ROUTE}
        className='row gap-2'
      >
        <Pill
          classValue='text-main'
          gradient='bg-green-emerald-primary'
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
        <B title='Confirm'>Confirm</B>
      </div>
    </motion.div>
  );
};
