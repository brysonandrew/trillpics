import { APP_TITLE } from '@app/index';
import clsx from 'clsx';
import {
  motion,
  useTransform,
} from 'framer-motion';
import { DarkMode } from './dark-mode';
import { useScroll as useScrollContext } from '@context/scroll';
import { Divider } from '@components/decoration/Divider';
import { FadeDown } from '@components/vertical-fade/FadeDown';
import { Padding05 } from './Padding';
import { SCROLL } from '@context/scroll/Provider';

export const Header = () => {
  const { isScroll, scroll } =
    useScrollContext();

  const y2Scroll = useTransform(
    scroll.y,
    (v) => {
      const next = Math.min(SCROLL, v);
      return next;
    },
  );

  const maskScaleY = useTransform(
    y2Scroll,
    (v) => {
      const next = 1 - v / SCROLL;
      return next;
    },
  );

  return (
    <>
      <FadeDown />
      <Padding05 />
      <header
        className={clsx(
          'sticky left-0 top-0 right-0 column w-full z-60',
        )}
      >
        <div
          className={clsx(
            'w-container row-start-space',
            isScroll
              ? 'text-white-9'
              : '',
          )}
        >
          <div
            className={clsx(
              'column-start lg:row-base gap-5',
            )}
          >
            <motion.h1 className='lowercase text-2xl mt-0.5'>
              {APP_TITLE}
            </motion.h1>
            <motion.div>
              <motion.kbd className='text-sm lowercase text-gray-5'>
                t-shirts, hand printed,
                based in new zealand
              </motion.kbd>
            </motion.div>
          </div>
          <div className='relative lowercase overflow-hidden'>
            <DarkMode />
          </div>
        </div>
      </header>
      <Padding05 />
      <motion.div className='sticky left-0 top-0 right-0 h-10 overflow-hidden z-40'>
        <Divider
          classValue={clsx(
            'absolute left-0 bottom-0 h-full',
          )}
        />
      </motion.div>
      <motion.div
        style={{
          originY: '100%',
          scaleY: maskScaleY,
        }}
        className='sticky left-0 top-10 h-7 -mt-7 right-0 w-full bg-main z-60'
      />
    </>
  );
};
