import { TUseImageReturn } from '@components/image/useImage';
import { Backdrop } from '@components/decoration/Backdrop';
import { useDarkMode } from '@context/dark-mode';
import { useHover } from '@hooks/dom/useHover';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, Fragment } from 'react';
import { Add } from './Add';
import { Text } from './Text';
import { Portal } from '@components/image/Portal';

export type TPassedProps = {
  name?: string;
  src: string;
  canvas?: 'black' | 'white';
};
type TProps = Omit<
  TUseImageReturn,
  'boxProps'
> &
  TPassedProps & {
    size: number;
  };
export const Image: FC<TProps> = ({
  isFirstPosition,
  isHover,
  name,
  src,
  canvas = 'black',
  size,
  imageProps,
  backdropProps,
}) => {
  const {
    isHover: isHoverAdd,
    ...hoverAddHandlers
  } = useHover();
  const canvasSrc = `/canvas/${canvas}/b1.png`;
  const dm = useDarkMode();

  const printSize = size
    ? imageProps.style.width * 0.4
    : 0;
  const Root = isFirstPosition
    ? Fragment
    : Portal;
  return (
    <Root>
      {isFirstPosition ? (
        <Backdrop
          id={src}
          isHover={
            isHover || isHoverAdd
          }
        />
      ) : (
        <motion.div
          {...backdropProps}
        />
      )}
      <motion.img
        className={clsx(
          'absolute inset-0',
          isFirstPosition
            ? 'zoom-in'
            : 'zoom-out',
        )}
        src={canvasSrc}
        {...imageProps}
        style={{
          ...imageProps.style,
          filter: `invert(${
            (canvas === 'white' &&
              dm.isDarkMode) ||
            (canvas === 'black' &&
              !dm.isDarkMode)
              ? 100
              : 0
          }%) brightness(${
            dm.isDarkMode ? 100 : 100
          }%)`,
        }}
        key={resolveCompositeKey(
          imageProps.key,
          dm.darkKey,
          src,
        )}
        layoutId={resolveCompositeKey(
          canvasSrc,
          src,
        )}
      />
      <motion.img
        className='pointer-events-none rounded-full'
        src={src}
        width={printSize}
        height={printSize}
        style={{
          position:
            imageProps.style.position,
          zIndex:
            imageProps.style.zIndex,
          top:
            imageProps.style.top +
            printSize * 0.55,
          left:
            imageProps.style.left +
            printSize * 0.75,
        }}
        layoutId={src}
      />
      <>
        {name &&
          (!isFirstPosition ||
            (isFirstPosition &&
              isHover)) && (
            <>
              <Text
                name={name}
                isFirstPosition={
                  isFirstPosition
                }
                src={src}
                style={{
                  position:
                    imageProps.style
                      .position,
                  zIndex:
                    imageProps.style
                      .zIndex,
                }}
              />
              <Add
                isFirstPosition={
                  isFirstPosition
                }
                src={src}
                style={{
                  position:
                    imageProps.style
                      .position,
                  zIndex:
                    imageProps.style
                      .zIndex,
                }}
                isHover={isHoverAdd}
                {...hoverAddHandlers}
              />
            </>
          )}
      </>
    </Root>
  );
};
