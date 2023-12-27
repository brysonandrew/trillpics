import { THoverKey } from '@hooks/cursor/config';
import type {
  TState,
  TContext,
} from './types';
import { motionValue } from 'framer-motion';

export const STATE: TState = {
  isCursorReady: false,
  hoverKey: null,
  hoverKeyParts: [],
  cursorKey: null,
};

export const CONTEXT: TContext = {
  ...STATE,
  onHoverKey: (_: THoverKey) => null,
  onCursorReady: (_: boolean) => null,
  offsetRef: {
    current: { x: 1, y: 1 },
  },
  cursorLabel: {
    x: motionValue(0),
    y: motionValue(0),
  },
  cursor: {
    x: motionValue(0),
    y: motionValue(0),
  },
};
