import { resolveVerticalShiftPresence } from '@utils/animation';
import { motion } from 'framer-motion';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
} from './config';
import { TRANSITION } from '@constants/animation';
import { createElement } from 'react';
import { useScroll as useScrollContext } from '@context/scroll';
import { useDarkMode } from '@context/dark-mode';
import { useHoverKey } from '@hooks/dom/useHoverKey';
import { Moon } from './icons/Moon';
import { Sun } from './icons/Sun';
import { resolveCompositeKey } from '@utils/keys';
import { Backdrop } from '@components/interactive/Backdrop';

export const DarkMode = () => {
  const { isScroll } =
    useScrollContext();
  const darkMode = useDarkMode();

  const isDarkMode =
    darkMode.isDarkMode;
  const key = isDarkMode
    ? 'light'
    : 'dark';
  const title = `Switch to ${key} mode`;

  const { isHover, handlers } =
    useHoverKey();
  const hoverkey = resolveCompositeKey(
    'dark-mode',
    title,
  );
  const handleTap = () => {
    darkMode.toggle();
  };
  const iconProps = (
    origin: `${number}%`,
  ) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(
      origin,
    ),
  });

  return (
    <motion.div
      className='relative'
      transition={{
        delay: isScroll ? 0.1 : 0,
        ...TRANSITION,
      }}
      {...SHARED_ANIMATION_PROPS}
      {...handlers(hoverkey)}
    >

      <motion.button
        title={title}
        onTap={handleTap}
      >
        <div className='relative row-right gap-4 w-30 pr-2.5 py-1.5 overflow-hidden text-sm'>
        <Backdrop
        isHover={isHover(hoverkey)}
        id={darkMode.darkKey}
      />
          {createElement(
            isDarkMode ? Moon : Sun,
            {
              ...iconProps(
                isDarkMode
                  ? '-100%'
                  : '100%',
              ),
            },
          )}
          <samp className='relative tracking-widest'>
            {darkMode.darkKey}
          </samp>
        </div>
      </motion.button>
    </motion.div>
  );
};
