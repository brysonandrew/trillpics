import { useEffect } from 'react';
import { useLocalStorage } from '../dom/useLocalStorage';
import { NOOP } from '@constants/functions';
const BRYSONA_DISPLAY_MODE_KEY = 'BRYSONA_DISPLAY_MODE_KEY';

const MODES = ['dark', 'light'] as const;
export type TDarkKey = (typeof MODES)[number];
export type TUseDarkMode = {
  isDarkMode: boolean;
  darkKey: TDarkKey;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

const INIT_MODE = 'dark';
export const INIT: TUseDarkMode = {
  isDarkMode: INIT_MODE === 'dark',
  darkKey: INIT_MODE,
  toggle: NOOP,
  enable: NOOP,
  disable: NOOP,
};

export const useDarkMode = (
  defaultValue?: boolean,
): TUseDarkMode => {
  const [isDarkMode, setDarkMode] =
    useLocalStorage<boolean>(
      BRYSONA_DISPLAY_MODE_KEY,
      defaultValue ?? true,
    );

  const enable = () => {
    setDarkMode(true);
  };

  const disable = () => {
    setDarkMode(false);
  };

  const toggle = () => {
    console.log(isDarkMode)
    if (isDarkMode) {
      disable();
    } else {
      enable();
    }
  };

  useEffect(() => {
    const darkClass = (operation: 'add' | 'remove') =>
      document.documentElement.classList[operation]('dark');
    darkClass(isDarkMode ? 'add' : 'remove');
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.transition =
      'color 0.9s, background-color 0.9s';
  }, []);

  return {
    darkKey: isDarkMode ? 'dark' : 'light',
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
