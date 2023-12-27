import {
  useRef,
  useState,
} from 'react';
import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { STATE } from './constants';
import { useMotionValue } from 'framer-motion';
import { TCursorOffset } from '@hooks/cursor/useCursorOffset';
import { Cursor } from '.';
import { resolveHoverKeyVariations } from '@components/cursor/switch/config';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<
  TProviderProps
> = ({ children }) => {
  const [
    isCursorReady,
    setCursorReady,
  ] = useState(STATE.isCursorReady);
  const [hoverKey, setHoverKey] =
    useState(STATE.hoverKey);
  const hoverKeyVariations =
    resolveHoverKeyVariations(hoverKey);

  const offsetRef =
    useRef<TCursorOffset>({
      x: 1,
      y: -1,
    });
  const cursorLabelX =
    useMotionValue(0);
  const cursorLabelY =
    useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  return (
    <Cursor.Provider
      value={{
        offsetRef,
        cursor: {
          x: cursorX,
          y: cursorY,
        },
        cursorLabel: {
          x: cursorLabelX,
          y: cursorLabelY,
        },
        isCursorReady,
        onHoverKey: setHoverKey,
        onCursorReady: setCursorReady,
        ...hoverKeyVariations,
      }}
    >
      {children}
    </Cursor.Provider>
  );
};
