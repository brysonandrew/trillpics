import {
  useEffect,
  useState,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
} from 'react';
import type { FC } from 'react';
import {
  motionValue,
  useMotionValueEvent,
  useScroll as useFMScroll,
} from 'framer-motion';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import {
  useLocation,
  useNavigate,
} from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAM_ID } from '@components/pics/useImage';
import { TMotionPoint } from '@t/animation';

export const STATE: TState = {
  isScrolling: false,
  isScroll: false,
};

export const CONTEXT: TContext = {
  ...STATE,
  scroll: {
    x: motionValue(0),
    y: motionValue(0),
  },
};

export type TState = {
  isScrolling: boolean;
  isScroll: boolean;
};

export type TContext = TState & {
  scroll: TMotionPoint;
};

export const SCROLL = 120;
export const SCROLL_COOLDOWN = 80;

export const Scroll =
  createContext<TContext>(CONTEXT);

export const useScroll = (): TContext =>
  useReactContext<TContext>(Scroll);

type TProviderProps = PropsWithChildren;
export const ScrollProvider: FC<
  TProviderProps
> = ({ children }) => {
  const { scrollX, scrollY } =
    useFMScroll();
  const [isScroll, setScroll] =
    useState(false);
  const [isScrolling, setScrolling] =
    useState(false);
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const startScroll = () => {
    searchParams.delete(
      SEARCH_PARAM_ID,
    );
    navigate(
      `${pathname}?${searchParams}`,
    );
    setScrolling(true);
  };

  const handleUpdate = (
    value: number,
  ) => {
    if (!isScrolling) {
      startScroll();
    }
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        setScrolling(false);
      },
      SCROLL_COOLDOWN,
    );

    if (!isScroll && value > SCROLL) {
      setScroll(true);
    }
    if (isScroll && value < SCROLL) {
      setScroll(false);
    }
  };
  useMotionValueEvent(
    scrollY,
    'change',
    handleUpdate,
  );

  useEffect(() => {
    const setY = () => {
      scrollX.set(0);
      scrollY.set(0);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      handleUpdate(0);
    };
    timeoutRef.current =
      setTimeout(setY);
  }, [pathname]);

  return (
    <Scroll.Provider
      value={{
        scroll: {
          x: scrollX,
          y: scrollY,
        },
        isScroll,
        isScrolling,
      }}
    >
      {children}
    </Scroll.Provider>
  );
};
