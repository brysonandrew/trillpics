import { I } from '@brysonandrew/icons-i';
import { TUseImageReturn } from '@/components/pic/use-image';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { resolveCompositeKey } from '@utils/keys';
import { motion } from 'framer-motion';
import { FC } from 'react';

export const TShirtIcon: FC<
  {
    id: string;
    printSrc: string;
    canvasSrc: string;
  } & {
    imageProps: TUseImageReturn['designProps'];
  }
> = ({
  id,
  imageProps,
  printSrc,
  canvasSrc,
}) => {
  const dm = useDarkMode();
  return (
    <motion.div
      {...imageProps}
      key={resolveCompositeKey(
        id,
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
