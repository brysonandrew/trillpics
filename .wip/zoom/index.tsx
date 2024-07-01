import clsx from 'clsx';
import {
  clamp,
  motion,
  useMotionValue,
} from 'framer-motion';
import { useState, type FC } from 'react';
import { useCursor } from './hooks/useCursor';
import { useScale } from './hooks/useScale';
// import { Picture } from '@brysonandrew/media/picture';
import { useTapEvents } from './hooks/useTapEvents';
import { CURSOR_SIZE_QUARTER, TImageProps, TMoveConfig, TSharedConfig } from '~/components/zoom/config';
import { TMotionPoint } from '~/types/animation';
import { TMediaRecord } from '~ops/types/media';
import { Picture } from '~/components/zoom/picture';
// import { Tag } from './Tag';
// import { TMotionPoint } from '@brysonandrew/motion-config-types';
// import { TMediaRecord } from '@brysonandrew/media/config/types';
// import {
//   CURSOR_SIZE_QUARTER,
//   TImageProps,
//   TMoveConfig,
//   TSharedConfig,
// } from '@brysonandrew/gallery-viewer/ready/sections/zoom/config';

const MOVE_BUFFER = CURSOR_SIZE_QUARTER;

type TProps = TImageProps & {
  index: number;
  count: number;
  scroll: TMotionPoint;
  mediaRecord: TMediaRecord;
  viewportWidth: number;
  container: HTMLElement;
};
export const Zoom: FC<TProps> = ({
  index,
  count,
  scroll,
  mediaRecord,
  viewportWidth,
  container,
  image,
}) => {
  const [isCursorReady, setCursorReady] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const imageRect = image.getBoundingClientRect();

  const imageWidth = imageRect.width;
  const imageHeight = imageRect.height;

  const imageX = imageRect.x;
  const imageY = imageRect.y;

  const rect = container.getBoundingClientRect();

  const handleMove = ({ cx, cy }: TMoveConfig) => {
    if (
      cx > -MOVE_BUFFER &&
      cy > -MOVE_BUFFER &&
      cx < imageWidth + MOVE_BUFFER &&
      cy < imageHeight + MOVE_BUFFER
    ) {
      cx = clamp(0, imageWidth, cx);
      cy = clamp(0, imageHeight, cy);

      cursorX.set(cx);
      cursorY.set(cy);

      setCursorReady(true);
    } else {
      setCursorReady(false);
    }
  };

  const sharedConfig: TSharedConfig = {
    index,
    count,
    image,
    imageRect,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
    container,
    rect,
    viewportWidth,
    cursorX,
    cursorY,
    scroll,
    onMove: handleMove,
    onClose: () => setCursorReady(false),
  };
  const rootProps = useCursor(sharedConfig);
  const { scale, onJumpScale, onTuneScale, ...copyProps } =
    useScale(sharedConfig);

  useTapEvents({
    onJumpScale,
    onTuneScale,
    ...sharedConfig,
  });

  return (
    <>
      {isCursorReady && (
        <>
          <motion.div
            className={clsx(
              'absolute pointer-events-none z-10',
            )}
            {...rootProps}
          >
            {scale}
            {/* <Tag>{`${~~scale}`}</Tag> */}
          </motion.div>
          <motion.div
            className='absolute pointer-events-none overflow-hidden'
            {...rootProps}
          >
            <Picture
              width={imageWidth}
              height={imageHeight}
              mediaRecord={mediaRecord}
              className='absolute'
              {...copyProps}
            />
          </motion.div>
        </>
      )}
    </>
  );
};
