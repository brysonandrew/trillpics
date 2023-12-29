import { APP_TITLE } from '@app/index';
import { I } from '@components/Icon';
import { ARROW_LEFT } from '@constants/icons/directionts';
import { motion } from 'framer-motion';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { SHOP_CURSOR_KEY } from '@components/cursor/switch/config';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '@constants/routes';
import { useScrollIntoView } from '@hooks/scroll/useScrollIntoView';

export const Empty = () => {
  const { isHover, handlers } =
    useHoverKey(
      SHOP_CURSOR_KEY,
      `Go to ${APP_TITLE} store`,
    );
  const ref = useScrollIntoView<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className='relative w-container -top-17'
      {...handlers}
    >
      <Link
        to={HOME_ROUTE}
        className='column lg:row-start'
      >
        <img
          className='lg:w-1/2 pointer-events-none'
          src='/decoration/empty-shopping-cart.png'
          alt='empty shopping cart'
        />
        <div className='absolute p-4 pointer-events-none lg:(relative px-12 py-24 w-1/2)'>
          <motion.div
            style={{ opacity: 0.4 }}
            animate={{
              opacity: isHover
                ? 0.8
                : 0.4,
            }}
            className='cover bg-section-inverted backdrop-blur-lg'
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
                <motion.span className='whitespace-nowrap text-blue'>
                  <I
                    className='inline text-current'
                    inline
                    icon={ARROW_LEFT}
                  />{' '}
                  <i className='inline text-current'>
                    Visit {APP_TITLE}
                  </i>
                </motion.span>{' '}
                and fill it with as many
                t-shirts as it can
                handle.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
