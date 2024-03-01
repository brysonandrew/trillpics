import { resolveVerticalShiftPresence } from '@utils/animation';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { TRANSITION } from '@constants/animation';
import { createElement } from 'react';
import { useScroll as useScrollContext } from '@context/scroll';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { Moon } from './icons/Moon';
import { Sun } from './icons/Sun';
import { Item } from '../Item';
import { DARK_MODE_CURSOR_KEY } from '@components/cursor/switch/config';

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
  const handleTap = () => {
    darkMode.toggle();
  };
  const iconProps = (
    origin: `${number}%`,
    isDisabled: boolean,
  ) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(
      origin,
    ),
    ...(isDisabled
      ? { transition: { duration: 0 } }
      : {}),
  });

  return (
    <Item
      cursorKey={DARK_MODE_CURSOR_KEY}
      title={title}
      onTap={handleTap}
      transition={{
        delay: isScroll ? 0.1 : 0,
        ...TRANSITION,
      }}
      icon={(isHover) =>
        createElement(
          isDarkMode ? Moon : Sun,
          {
            ...iconProps(
              isDarkMode
                ? '-100%'
                : '100%',
              !isHover,
            ),
          },
        )
      }
    >
      {darkMode.darkKey}
    </Item>
  );
};
