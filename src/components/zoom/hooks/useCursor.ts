import { useEventListener } from '@brysonandrew/hooks-events/useEventListener';

import { useOutsideClick } from '@brysonandrew/hooks-dom/useOutsideClick';
import { TSharedConfig, TInteractiveEvent, resolveCursorCoords, CURSOR_SIZE_HALF, CURSOR_SIZE } from '~/components/zoom/config';
const MAX_WIDTH = 800;

export const resolveGalleryWidth = (
  viewportWidth: number,
) => Math.min(MAX_WIDTH, viewportWidth * 0.9);

type TConfig = TSharedConfig;
export const useCursor = ({
  index,
  cursorX,
  cursorY,
  rect,
  viewportWidth,
  image,
  imageX,
  imageY,
  scroll,
  imageRect,
  onMove,
  onClose,
}: TConfig) => {
  const imageRef = { current: image };
  const handleMove = (event: TInteractiveEvent) => {
    const { cx, cy } = resolveCursorCoords(event, {
      imageX,
      imageY,
      scroll,
    });
    onMove({ cx, cy });
  };

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  useOutsideClick({ ref: imageRef, handler: onClose });

  const galleryHalfPaddingX =
    (viewportWidth - resolveGalleryWidth(viewportWidth)) *
    0.5;

  return {
    style: {
      top: imageRect.top - rect.top - CURSOR_SIZE_HALF,
      left:
        index * viewportWidth +
        rect.left +
        imageRect.left -
        galleryHalfPaddingX -
        CURSOR_SIZE_HALF,
      x: cursorX,
      y: cursorY,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
    },
  };
};
