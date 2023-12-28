import { I } from '@components/Icon';
import { TUseImageReturn } from '@components/images/useImage';
import { useDarkMode } from '@context/dark-mode';
import { resolveCompositeKey } from '@utils/keys';
import { motion } from 'framer-motion';
import { FC } from 'react';

export const TShirtIcon: FC<
  {
    printSrc: string;
    canvasSrc: string;
  } & {
    imageProps: TUseImageReturn['imageProps'];
  }
> = ({
  imageProps,
  printSrc,
  canvasSrc,
}) => {
  const dm = useDarkMode();
  return (
    <motion.div
      {...imageProps}
      key={resolveCompositeKey(
        imageProps.key,
        dm.darkKey,
        printSrc,
      )}
      layoutId={resolveCompositeKey(
        canvasSrc,
        printSrc,
      )}
    >
      <I
        icon='raphael:tshirt'
        // icon='mdi:tshirt-v'
        className='absolute inset-0'
        strokeWidth={0.1}
        fill='currentColor'
        stroke={
          dm.isDarkMode
            ? 'white'
            : 'black'
        }
        style={{
          ...imageProps.style,
          color: dm.isDarkMode
            ? 'black'
            : 'white',
        }}
      />
    </motion.div>
  );
};
