import { TMotionPoint } from '@brysonandrew/motion-config-types';
import { MotionValue } from 'framer-motion';

export const SCALE = {
  INIT: 2,
  MIN: 1,
  MAX: 20,
} as const;

export const LOCAL_HOST_SCALE_KEY = 'LOCAL_HOST_SCALE_KEY';
export const WHEEL_DELTA_THRESHOLD = 0.2;
export const DELTA_FACTOR = 0.001;

export const CURSOR_SIZE = 275;
export const CURSOR_SIZE_HALF = CURSOR_SIZE * 0.5;
export const CURSOR_SIZE_QUARTER = CURSOR_SIZE_HALF * 0.5;

export type TImageProps = {
  image: HTMLImageElement;
};

export type TMoveConfig = { cx: number; cy: number };
export type TSharedConfig = TImageProps & {
  index: number;
  count: number;
  imageRect: DOMRect;
  imageX: number;
  imageY: number;
  imageWidth: number;
  imageHeight: number;
  container: HTMLElement;
  rect: DOMRect;
  viewportWidth: number;
  cursorX: MotionValue;
  cursorY: MotionValue;
  scroll: TMotionPoint;
  onMove(onMoveConfig: TMoveConfig): void;
  onClose(): void;
};
export const resolveCoord = (
  event: MouseEvent | TouchEvent,
  key: 'pageX' | 'pageY',
  touchIndex = 0,
) =>
  (event as MouseEvent)[key] ??
  (event as TouchEvent).touches[touchIndex][key];
export type TInteractiveEvent =
  | PointerEvent
  | MouseEvent
  | TouchEvent;
export type TCursorCoordsConfig = Pick<
  TSharedConfig,
  'imageX' | 'imageY' | 'scroll'
> & { touchIndex?: number };
export const resolveCursorCoords = (
  event: TInteractiveEvent,
  {
    imageX,
    imageY,
    scroll,
    touchIndex = 0,
  }: TCursorCoordsConfig,
) => {
  const pageX = resolveCoord(event, 'pageX');
  const pageY = resolveCoord(event, 'pageY');

  const cx = pageX - scroll.x.get() - imageX;
  const cy = pageY - scroll.y.get() - imageY;

  return { cx, cy };
};
