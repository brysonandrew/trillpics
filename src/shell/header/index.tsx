import clsx from 'clsx';
import {
  motion,
  useMotionTemplate,
  useTransform,
} from 'framer-motion';
import { useScroll as useScrollContext } from '@context/scroll';
import { Padding, Padding0125, Padding025 } from './Padding';
import { SCROLL } from '@context/scroll/Provider';
import { useDarkMode } from '@brysonandrew/dark-mode';
import {
  FC,
  PropsWithChildren,
} from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { Title } from './Title';
import { HOME_ROUTE } from '@constants/routes';
import { resolveGradient } from '@brysonandrew/color-gradient';
import { Divider } from '@components/decoration/Divider';

type TProps = PropsWithChildren;
export const Header: FC<TProps> = ({
  children,
}) => {
  const { pathname } = useLocation();
  const isHome =
    pathname === HOME_ROUTE;
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

  const y2Scroll04 = useTransform(
    y2Scroll,
    (v) => {
      const next = v * 0.14;
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
      {/* <Padding0125 /> */}
      <motion.header
        className={clsx(
          'sticky left-0 top-0 right-0 column w-full z-60',
        )}
        style={{
          color,
        }}
      >
        <div
          className={clsx(
            'w-container row-space',
          )}
        >
          <div className='h-21'>
            <div className='relative top-3 lg:row gap-4'>
              {isHome ? (
                <Title />
              ) : (
                <Link to={HOME_ROUTE}>
                  <Title />
                </Link>
              )}
              {/* <h2
                className='mt-2 lg:mt-8 uppercase text-xl tracking-wide'
              >
                AI-GENERATED ART
              </h2> */}
            </div>
          </div>
          <div className='row-base shrink-0 mt-1.5 lowercase overflow-hidden'>
            {children}
          </div>
        </div>
        <motion.p
          className='w-container text-main pl-2 text-left text-xl opacity-80'
          style={{
            y: y2Scroll04,
          }}
        >
          AI-GENERATED ART
        </motion.p>
      </motion.header>
      <Padding />
      <motion.div
        className='sticky left-0 top-0 right-0 h-21 backdrop-blur-lg overflow-hidden z-40'
        style={{
          backgroundImage:
            resolveGradient({
              name: 'linear-gradient',
              parts: [
                'rgba(0,0,0,0.5)',
                'black',
              ],
            }),
        }}
      >
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
        className='sticky left-0 top-14 h-14 -mt-14 right-0 w-full bg-main z-60'
      />
    </>
  );
};
