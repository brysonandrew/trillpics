import { APP_TITLE } from '@app/index';
import clsx from 'clsx';
import {
  motion,
  useMotionTemplate,
  useTransform,
} from 'framer-motion';
import { DarkMode } from './dark-mode';
import { useScroll as useScrollContext } from '@context/scroll';
import { Divider } from '@components/decoration/Divider';
import { FadeDown } from '@components/vertical-fade/FadeDown';
import { Padding } from './Padding';
import { SCROLL } from '@context/scroll/Provider';
import { useDarkMode } from '@context/dark-mode';
import { Cart } from './cart';
import {
  FC,
  PropsWithChildren,
} from 'react';

type TProps = PropsWithChildren;
export const Header: FC<TProps> = ({
  children,
}) => {
  const { isDarkMode } = useDarkMode();
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

  const colorValue = useTransform(
    maskScaleY,
    isDarkMode ? [1, 1] : [1, 0],
    [0, 255],
  );

  const color = useMotionTemplate`rgba(${colorValue}, ${colorValue}, ${colorValue}, 1)`;

  return (
    <>
      {isScroll && <FadeDown />}
      <Padding />
      <motion.header
        className={clsx(
          'sticky left-0 top-0 right-0 column gap-1 w-full z-60',
        )}
        style={{ color }}
      >
        <div
          className={clsx(
            'w-container row-space',
          )}
        >
          <div
            className={clsx(
              'column-start lg:row-base gap-4',
            )}
          >
            <div className='relative row gap-1 pl-0 h-18'>
              <h1 className='capitalise mt-0.5 pl-0 whitespace-nowrap'>
                {APP_TITLE}
              </h1>
            </div>
          </div>
          <div className='row shrink-0 mt-1.5 lowercase overflow-hidden'>
            {children}
          </div>
        </div>
        <samp className='w-container text-left opacity-40'>
          t-shirts hand printed, based
          in new zealand
        </samp>
      </motion.header>
      <Padding />
      <motion.div className='sticky left-0 top-0 right-0 h-19 overflow-hidden z-40'>
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
        className='sticky left-0 top-14 h-17 -mt-17 right-0 w-full bg-main z-60'
      />
    </>
  );
};
