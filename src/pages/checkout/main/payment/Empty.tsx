import { APP_TITLE } from '@app/index';
import { I } from '@components/Icon';
import { ARROW_LEFT } from '@constants/icons/directionts';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { SHOP_CURSOR_KEY } from '@components/cursor/switch/config';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '@constants/routes';
import { useScrollIntoView } from '@hooks/scroll/useScrollIntoView';
import { B } from '@components/interactive/B';
import { useDarkMode } from '@context/dark-mode';
import clsx from 'clsx';

export const Empty = () => {
  const { isDarkMode, darkKey } =
    useDarkMode();
  const { isHover, handlers } =
    useHoverKey(
      SHOP_CURSOR_KEY,
      `Go to ${APP_TITLE} store`,
    );
  const ref =
    useScrollIntoView<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className='relative w-container my-4'
    >
      <Link
        to={HOME_ROUTE}
        className='column lg:row-start gap-4'
      >
        <AnimatePresence>
          <motion.img
            key={darkKey}
            className='lg:w-1/2 pointer-events-none'
            src={`/decoration/cart/${darkKey}.png`}
            alt='empty shopping cart'
          />
        </AnimatePresence>
        <motion.div
          className='absolute mt-8 p-4 backdrop-blur-lg lg:(relative px-12 py-12 w-1/2 backdrop-blur-0)'
          {...handlers}
        >
          <motion.div
            initial={false}
            className={clsx(
              'cover bg-section-inverted',
            )}
            animate={{
              opacity: isHover
                ? 0.2
                : 0.1,
            }}
          />
          <div className='relative column gap-12 lg:(column-start)'>
            <h2 className='text-6xl leading-18'>
              Your cart is empty
            </h2>
            <div className='column-start gap-12'>
              <p className='text-2xl'>
                Your shopping cart lives
                to serve.
              </p>
              <p className='text-2xl leading-10'>
                Visit our store{' '}
                <span className='fancy inline relative -top-1 text-sm whitespace-nowrap text-current mx-2'>
                  {APP_TITLE}
                </span>{' '}
                and fill it with as many
                t-shirts as it can
                handle.
              </p>
              <B classValue='row gap-3 uppercase'>
                <I
                  className='text-current'
                  inline
                  icon={ARROW_LEFT}
                />
                go to store
              </B>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
